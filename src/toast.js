function openDefaultToast() {
  Toast.show("Default message toast", "default");
}
function openAccentToast() {
  Toast.show("Accent message toast", "accent");
}
function openWarnToast() {
  Toast.show("Warn message toast", "warn");
}

const Toast = {
  init() {
    this.hideTimeout = null;

    this.el = document.createElement("div");
    this.frame = document.createElement("div");

    this.frame.className = "frame"
    this.el.className = "toast";
    this.el.appendChild(this.frame);
    document.body.appendChild(this.el);
  },

  show(message, state) {
    clearTimeout(this.hideTimeout);

    this.frame.textContent = message;
    this.el.className = "toast show";

    if (state) {
      this.el.classList.add(`${state}`);
    }

    this.hideTimeout = setTimeout(() => {
      this.el.classList.remove("show");
    }, 3000);
  }
};

document.addEventListener("DOMContentLoaded", () => Toast.init());
