(function () {
  let profile = "io";
  let key = null;
  const rootKey = "londre1-private-diary-v1";
  const enc = new TextEncoder();
  const dec = new TextDecoder();

  const $ = id => document.getElementById(id);
  const toBase64 = bytes => btoa(String.fromCharCode(...new Uint8Array(bytes)));
  const fromBase64 = value => Uint8Array.from(atob(value), c => c.charCodeAt(0));

  function store() {
    return JSON.parse(localStorage.getItem(rootKey) || "{}");
  }
  function saveStore(value) {
    localStorage.setItem(rootKey, JSON.stringify(value));
  }

  async function derive(pin, salt) {
    const material = await crypto.subtle.importKey("raw", enc.encode(pin), "PBKDF2", false, ["deriveKey"]);
    return crypto.subtle.deriveKey(
      { name: "PBKDF2", salt, iterations: 120000, hash: "SHA-256" },
      material,
      { name: "AES-GCM", length: 256 },
      false,
      ["encrypt", "decrypt"]
    );
  }

  async function encrypt(text) {
    const iv = crypto.getRandomValues(new Uint8Array(12));
    const cipher = await crypto.subtle.encrypt({ name: "AES-GCM", iv }, key, enc.encode(text));
    return { iv: toBase64(iv), cipher: toBase64(cipher) };
  }

  async function decrypt(packet) {
    const plain = await crypto.subtle.decrypt(
      { name: "AES-GCM", iv: fromBase64(packet.iv) },
      key,
      fromBase64(packet.cipher)
    );
    return dec.decode(plain);
  }

  async function unlock() {
    const pin = $("diaryPin").value.trim();
    if (pin.length < 4) {
      $("diaryLockText").textContent = "Usa almeno 4 caratteri nel PIN.";
      return;
    }
    const data = store();
    data[profile] = data[profile] || {};
    const state = data[profile];
    try {
      if (!state.salt || !state.check) {
        state.salt = toBase64(crypto.getRandomValues(new Uint8Array(16)));
        key = await derive(pin, fromBase64(state.salt));
        state.check = await encrypt("londre1");
        saveStore(data);
      } else {
        key = await derive(pin, fromBase64(state.salt));
        if (await decrypt(state.check) !== "londre1") throw new Error("PIN errato");
      }
      $("diaryPin").value = "";
      $("diaryLock").hidden = true;
      $("diaryPrivate").hidden = false;
      await loadDay();
      $("privateDiaryStatus").textContent = "Profilo sbloccato.";
    } catch (_) {
      key = null;
      $("diaryLockText").textContent = "PIN errato. Non è stato possibile aprire questo diario.";
    }
  }

  async function loadDay() {
    if (!key) return;
    const data = store();
    const active = document.querySelector(".tab[aria-selected='true']");
    const dayIndex = active ? active.dataset.t : "0";
    const packet = data[profile]?.days?.[String(dayIndex)];
    if (!packet) {
      $("privateDiaryText").value = "";
      $("privateDiaryStatus").textContent = "Nessuna nota privata per questo giorno.";
      return;
    }
    try {
      $("privateDiaryText").value = await decrypt(packet);
      $("privateDiaryStatus").textContent = "Nota privata caricata.";
    } catch (_) {
      $("privateDiaryText").value = "";
      $("privateDiaryStatus").textContent = "Nota non leggibile.";
    }
  }

  async function saveDay() {
    if (!key) return;
    const text = $("privateDiaryText").value;
    const data = store();
    data[profile] = data[profile] || {};
    data[profile].days = data[profile].days || {};
    const active = document.querySelector(".tab[aria-selected='true']");
    const dayIndex = active ? active.dataset.t : "0";
    data[profile].days[String(dayIndex)] = await encrypt(text);
    saveStore(data);
    $("privateDiaryStatus").textContent = "Nota cifrata e salvata su questo dispositivo.";
  }

  function lock() {
    key = null;
    $("privateDiaryText").value = "";
    $("diaryPrivate").hidden = true;
    $("diaryLock").hidden = false;
    $("diaryLockText").textContent = "Profilo bloccato. Inserisci di nuovo il PIN.";
  }

  document.querySelectorAll(".diary-profile").forEach(button => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".diary-profile").forEach(b => b.classList.remove("active"));
      button.classList.add("active");
      profile = button.dataset.profile;
      lock();
      const data = store();
      $("diaryLockText").textContent = data[profile]?.salt
        ? "Inserisci il PIN del profilo " + (profile === "io" ? "Io" : "Lei") + "."
        : "Crea un PIN personale per " + (profile === "io" ? "Io" : "Lei") + ".";
    });
  });

  $("diaryUnlock").addEventListener("click", unlock);
  $("diaryPin").addEventListener("keydown", event => {
    if (event.key === "Enter") unlock();
  });
  $("privateDiarySave").addEventListener("click", saveDay);
  $("privateDiaryLock").addEventListener("click", lock);
  document.querySelectorAll("[data-t]").forEach(button => {
    button.addEventListener("click", () => setTimeout(loadDay, 0));
  });

  const data = store();
  $("diaryLockText").textContent = data.io?.salt
    ? "Inserisci il PIN del profilo Io."
    : "Crea un PIN personale per Io.";
})();
