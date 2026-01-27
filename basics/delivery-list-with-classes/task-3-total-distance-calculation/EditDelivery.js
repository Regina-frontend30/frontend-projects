import Delivery from "./Delivery.js";

export default class EditDelivery extends Delivery {
  constructor(name, address, distance, status = "delivery") {
    super(name, address, distance);
    this._status = status;
    this.editButtonEl = null;
  }

  get status() {
    return this._status;
  }

  set status(value) {
    this._status = value;

    if (this.cardEl) {
      this.cardEl.classList.remove(
        "delivery-status-delivery",
        "delivery-status-delivered",
        "delivery-status-canceled"
      );
      this.cardEl.classList.add(`delivery-status-${this._status}`);
    }
  }

  createCardElement() {
    const card = super.createCardElement();

    const editBtn = document.createElement("button");
    editBtn.className = "delivery-edit-btn";
    editBtn.textContent = "Изменить";

    card.append(editBtn);

    this.editButtonEl = editBtn;
    this.cardEl = card;

    this.status = this._status;

    editBtn.addEventListener("click", () => {
      this.openEditModal();
    });

    return card;
  }

  openEditModal() {
    const overlay = document.createElement("div");
    overlay.className = "modal-overlay";

    const modal = document.createElement("div");
    modal.className = "modal";

    const closeBtn = document.createElement("button");
    closeBtn.className = "modal-close";
    closeBtn.textContent = "×";

    const titleEl = document.createElement("h2");
    titleEl.textContent = "Изменить";

    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.value = this.name;

    const addressInput = document.createElement("input");
    addressInput.type = "text";
    addressInput.value = this.address;

    const distanceInput = document.createElement("input");
    distanceInput.type = "text";
    distanceInput.value = this._distance;

    const statusSelect = document.createElement("select");
    const statuses = [
      { value: "delivery", label: "Доставляется" },
      { value: "delivered", label: "Доставлен" },
      { value: "canceled", label: "Отменён" },
    ];

    statuses.forEach(({ value, label }) => {
      const option = document.createElement("option");
      option.value = value;
      option.textContent = label;
      if (value === this._status) option.selected = true;
      statusSelect.append(option);
    });

    const saveBtn = document.createElement("button");
    saveBtn.className = "modal-save";
    saveBtn.textContent = "Сохранить";

    saveBtn.addEventListener("click", () => {
      this.name = nameInput.value;
      this.address = addressInput.value;
      this.distance = Number(distanceInput.value);
      this.status = statusSelect.value;

      if (this._nameEl) this._nameEl.textContent = this.name;
      if (this._addressEl) this._addressEl.textContent = this.address;

      overlay.remove();
    });

    closeBtn.addEventListener("click", () => overlay.remove());
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) overlay.remove();
    });

    modal.append(
      closeBtn,
      titleEl,
      nameInput,
      addressInput,
      distanceInput,
      statusSelect,
      saveBtn
    );
    overlay.append(modal);
    document.body.append(overlay);
  }

  static getTotalDistance(deliveryList) {
    const activeDeliveries = deliveryList.filter(
      (delivery) => delivery.status !== "canceled"
    );

    const totalDistance = activeDeliveries.reduce(
      (sum, delivery) => sum + Number(delivery._distance),
      0
    );

    return totalDistance;
  }
}
