// Storage Controller
const StorageCtrl = (() => {
  // Public Method
  return {
    StoreBreakfastInLS: (item) => {
      // Declare items
      let breakfast;

      if (localStorage.getItem("breakfast") === null) {
        breakfast = [];
        // push into breakfast
        breakfast.push(item);
        localStorage.setItem("breakfast", JSON.stringify(breakfast));
      } else {
        breakfast = JSON.parse(localStorage.getItem("breakfast"));

        breakfast.push(item);
        localStorage.setItem("breakfast", JSON.stringify(breakfast));
      }
    },
    StoreLunchInLS: (item) => {
      // Declare items
      let lunch;

      if (localStorage.getItem("lunch") === null) {
        lunch = [];
        // push into lunch
        lunch.push(item);
        localStorage.setItem("lunch", JSON.stringify(lunch));
      } else {
        lunch = JSON.parse(localStorage.getItem("lunch"));

        lunch.push(item);
        localStorage.setItem("lunch", JSON.stringify(lunch));
      }
    },
    StoreDinnerInLS: (item) => {
      // Declare dinner
      let dinner;

      if (localStorage.getItem("dinner") === null) {
        dinner = [];
        // push into dinner
        dinner.push(item);
        localStorage.setItem("dinner", JSON.stringify(dinner));
      } else {
        dinner = JSON.parse(localStorage.getItem("dinner"));

        dinner.push(item);
        localStorage.setItem("dinner", JSON.stringify(dinner));
      }
    },
    getBreakfastFromLS: () => {
      let breakfast;
      if (localStorage.getItem("breakfast") === null) {
        breakfast = [];
      } else {
        breakfast = JSON.parse(localStorage.getItem("breakfast"));
      }
      return breakfast;
    },
    getLunchFromLS: () => {
      let lunch;
      if (localStorage.getItem("lunch") === null) {
        lunch = [];
      } else {
        lunch = JSON.parse(localStorage.getItem("lunch"));
      }
      return lunch;
    },
    getDinnerFromLS: () => {
      let dinner;
      if (localStorage.getItem("dinner") === null) {
        dinner = [];
      } else {
        dinner = JSON.parse(localStorage.getItem("dinner"));
      }
      return dinner;
    },
    updateBreakfastInLS: (updateItem) => {
      let breakfast = StorageCtrl.getBreakfastFromLS();
      const id = updateItem.id;
      breakfast.forEach((item, index) => {
        if (id === item.id) {
          breakfast.splice(index, 1, updateItem);
        }
      });
      localStorage.setItem("breakfast", JSON.stringify(breakfast));
    },
    updateLunchInLS: (updateItem) => {
      let lunch = StorageCtrl.getLunchFromLS();
      const id = updateItem.id;
      lunch.forEach((item, index) => {
        if (id === item.id) {
          lunch.splice(index, 1, updateItem);
        }
      });
      localStorage.setItem("lunch", JSON.stringify(lunch));
    },
    updateDinnerInLS: (updateItem) => {
      let dinner = StorageCtrl.getDinnerFromLS();
      const id = updateItem.id;
      dinner.forEach((item, index) => {
        if (id === item.id) {
          dinner.splice(index, 1, updateItem);
        }
      });
      localStorage.setItem("dinner", JSON.stringify(dinner));
    },
    deleteBreakfastFromLS: (deleteItem) => {
      let breakfast = StorageCtrl.getBreakfastFromLS();
      const id = deleteItem.id;
      breakfast.forEach((item, index) => {
        if (id === item.id) {
          breakfast.splice(index, 1);
        }
      });
      localStorage.setItem("breakfast", JSON.stringify(breakfast));
    },
    deleteLunchFromLS: (deleteItem) => {
      let lunch = StorageCtrl.getLunchFromLS();
      const id = deleteItem.id;
      lunch.forEach((item, index) => {
        if (id === item.id) {
          lunch.splice(index, 1);
        }
      });
      localStorage.setItem("lunch", JSON.stringify(lunch));
    },
    deleteDinnerFromLS: (deleteItem) => {
      let dinner = StorageCtrl.getDinnerFromLS();
      const id = deleteItem.id;
      dinner.forEach((item, index) => {
        if (id === item.id) {
          dinner.splice(index, 1);
        }
      });
      localStorage.setItem("dinner", JSON.stringify(dinner));
    },
  };
})();

// Item Controller
const ItemCtrl = (() => {
  // Data Constructor
  const Item = function (id, name, calories, date) {
    this.id = id;
    this.name = name;
    this.calories = calories;
    this.date = date;
  };
  const dateData = {
    newDate: [
      { date: new Date().getUTCDate() },
      { month: new Date().getUTCMonth() + 1 },
      { year: new Date().getUTCFullYear() },
      { day: new Date().getTime() },
    ],
  };

  const breakfastData = {
    items: StorageCtrl.getBreakfastFromLS(),
    currentItem: null,
    totalCalories: 0,
  };
  const lunchData = {
    items: StorageCtrl.getLunchFromLS(),
    currentItem: null,
    totalCalories: 0,
  };
  const dinnerData = {
    items: StorageCtrl.getDinnerFromLS(),
    currentItem: null,
    totalCalories: 0,
  };

  return {
    addBreakfastItems: (name, calories) => {
      let ID = 0;
      if (breakfastData.items.length > 0) {
        ID = breakfastData.items[breakfastData.items.length - 1].id + 1;
      } else {
        ID = 0;
      }

      calories = parseInt(calories);
      let date = dateData.newDate;
      newItem = new Item(ID, name, calories, date);
      breakfastData.items.push(newItem);
      return newItem;
    },
    addLunchItems: (name, calories) => {
      let ID = 0;
      if (lunchData.items.length > 0) {
        ID = lunchData.items[lunchData.items.length - 1].id + 1;
      } else {
        ID = 0;
      }

      calories = parseInt(calories);
      let date = dateData.newDate;
      const newItem = new Item(ID, name, calories, date);
      lunchData.items.push(newItem);

      return newItem;
    },
    addDinnerItems: (name, calories) => {
      let ID = 0;
      if (dinnerData.items.length > 0) {
        ID = dinnerData.items[dinnerData.items.length - 1].id + 1;
      } else {
        ID = 0;
      }

      calories = parseInt(calories);
      let date = dateData.newDate;
      const newItem = new Item(ID, name, calories, date);
      dinnerData.items.push(newItem);

      return newItem;
    },
    getBreakfastItems: () => {
      return breakfastData.items;
    },
    getLunchItems: () => {
      return lunchData.items;
    },
    getDinnerItems: () => {
      return dinnerData.items;
    },
    setCurrentBreakfast: (id) => {
      const breakfastItems = breakfastData.items;
      breakfastItems.forEach((item) => {
        if (item.id === id) {
          breakfastData.currentItem = item;
        }
      });
    },
    setCurrentLunch: (id) => {
      const lunchItems = lunchData.items;
      lunchItems.forEach((item) => {
        if (item.id === id) {
          lunchData.currentItem = item;
        }
      });
    },
    setCurrentDinner: (id) => {
      const dinnerItems = dinnerData.items;
      dinnerItems.forEach((item) => {
        if (item.id === id) {
          dinnerData.currentItem = item;
        }
      });
    },
    getCurrentBreakfast: () => {
      return breakfastData.currentItem;
    },
    getCurrentLunch: () => {
      return lunchData.currentItem;
    },
    getCurrentDinner: () => {
      return dinnerData.currentItem;
    },
    updateBreakfastItem: (name, calories) => {
      let found;
      let id = breakfastData.currentItem.id;
      breakfastData.items.forEach((item) => {
        if (id === item.id) {
          item.name = name;
          item.calories = calories;

          found = item;
        }
      });

      return found;
    },
    updateLunchItem: (name, calories) => {
      let found;
      let id = lunchData.currentItem.id;
      lunchData.items.forEach((item) => {
        if (id === item.id) {
          item.name = name;
          item.calories = calories;

          found = item;
        }
      });

      return found;
    },
    updateDinnerItem: (name, calories) => {
      let found;
      let id = dinnerData.currentItem.id;
      dinnerData.items.forEach((item) => {
        if (id === item.id) {
          item.name = name;
          item.calories = calories;

          found = item;
        }
      });

      return found;
    },
    deleteCurrentBreakfast: (item) => {
      const id = item.id;
      const ids = breakfastData.items.map((eachItem) => eachItem.id);
      const index = ids.indexOf(id);

      breakfastData.items.splice(index, 1);
      breakfastData.currentItem = null;
    },
    deleteCurrentLunch: (item) => {
      const id = item.id;
      const ids = lunchData.items.map((eachItem) => eachItem.id);
      const index = ids.indexOf(id);

      lunchData.items.splice(index, 1);
      lunchData.currentItem = null;
    },
    deleteCurrentDinner: (item) => {
      const id = item.id;
      const ids = dinnerData.items.map((eachItem) => eachItem.id);
      const index = ids.indexOf(id);

      dinnerData.items.splice(index, 1);
      dinnerData.currentItem = null;
    },
    totalBreakfastCalories: () => {
      let total = 0;
      breakfastData.items.forEach((item) => {
        total += parseInt(item.calories);
      });
      breakfastData.totalCalories = total;

      return total;
    },
    totalLunchCalories: () => {
      let total = 0;
      lunchData.items.forEach((item) => {
        total += parseInt(item.calories);
      });
      lunchData.totalCalories = total;

      return total;
    },
    totalDinnerCalories: () => {
      let total = 0;
      dinnerData.items.forEach((item) => {
        total += parseInt(item.calories);
      });
      dinnerData.totalCalories = total;

      return total;
    },
    getBreakfastDayCount: () => {
      let day;
      const firstItem = breakfastData.items[0];
      const firstDay = firstItem.date[3].day;
      const lastDay = new Date();
      const dateDiff = lastDay.getTime() - firstDay;

      const oneDay = 1000 * 3600 * 24;
      day = Math.trunc(dateDiff / oneDay);
      if (day <= 0) {
        day = `today`;
      } else if (day === 1) {
        day = `in 1 day`;
      } else if (day > 1) {
        day = `in ${day} days`;
      }
      return day;
    },
    getLunchDayCount: () => {
      let day;
      const firstItem = lunchData.items[0];
      const firstDay = firstItem.date[3].day;
      const lastDay = new Date();
      const dateDiff = lastDay.getTime() - firstDay;

      const oneDay = 1000 * 3600 * 24;
      day = Math.trunc(dateDiff / oneDay);
      if (day <= 0) {
        day = `today`;
      } else if (day === 1) {
        day = `in 1 day`;
      } else if (day > 1) {
        day = `in ${day} days`;
      }

      return day;
    },
    getDinnerDayCount: () => {
      let day;
      const firstItem = dinnerData.items[0];
      const firstDay = firstItem.date[3].day;
      const lastDay = new Date();
      const dateDiff = lastDay.getTime() - firstDay;

      const oneDay = 1000 * 3600 * 24;
      day = Math.trunc(dateDiff / oneDay);
      if (day <= 0) {
        day = `today`;
      } else if (day === 1) {
        day = `in 1 day`;
      } else if (day > 1) {
        day = `in ${day} days`;
      }

      return day;
    },
    logBreakfastData: () => {
      // console.log("Breakfast:", breakfastData);
    },
    logLunchData: () => {
      // console.log("Lunch:", lunchData);
    },
    logDinnerData: () => {
      // console.log("Dinner:", dinnerData);
    },
  };
})();
// UI Controller
const UICtrl = (() => {
  const UISelector = {
    breakfastBtn: "#breakfast-btn",
    lunchBtn: "#lunch-btn",
    dinnerBtn: "#dinner-btn",
    addMessage: ".add-message",
    updateBreakfastBtn: ".update-breakfast-btn",
    deleteBreakfastBtn: ".delete-breakfast-btn",
    updateLunchBtn: ".update-lunch-btn",
    deleteLunchBtn: ".delete-lunch-btn",
    updateDinnerBtn: ".update-dinner-btn",
    deleteDinnerBtn: ".delete-dinner-btn",
    backBtn: ".back-btn",
    mealInput: "#meal-input",
    caloriesInput: "#calories-input",
    breakfastBtnList: ".breakfast-btn-list",
    lunchBtnList: ".lunch-btn-list",
    dinnerBtnList: ".dinner-btn-list",
    tableHeader: ".table-header",
    table: ".table",
    tableBody: ".table-body",
    editItem: ".edit-item",
  };

  return {
    addBreakfastToTable: function () {
      const tableHeader = document.querySelector(UISelector.tableHeader);
      tableHeader.innerHTML = `
     <h2> Your Breakfast Meal List</h2>
     `;
      const dataItems = ItemCtrl.getBreakfastItems();
      // StorageCtrl.StoreBreakfastInLS(dataItems);
      let eachItem = "";
      dataItems.forEach((item) => {
        eachItem += `
        <tr id="item-${item.id}" class="table-row">
        <td>${item.name}</>
        <td>${item.calories}</>
        <td>${item.date[0].date}/${item.date[1].month}/${item.date[2].year}</>
        <td><a href="#" class="secondary-content"><i class="edit-breakfast-item fa fa-pencil"></i></a></td>
        </tr>
        
        `;
      });
      document.querySelector(UISelector.tableBody).innerHTML = eachItem;
    },
    addLunchToTable: function () {
      const tableHeader = document.querySelector(UISelector.tableHeader);
      tableHeader.innerHTML = `
     <h2> Your Lunch Meal List</h2>
     `;
      const dataItems = ItemCtrl.getLunchItems();
      // StorageCtrl.StoreBreakfastInLS(dataItems);
      let eachItem = "";
      dataItems.forEach((item) => {
        eachItem += `
        <tr id="item-${item.id}" class="table-row">
        <td>${item.name}</>
        <td>${item.calories}</>
        <td>${item.date[0].date}/${item.date[1].month}/${item.date[2].year}</>
        <td><a href="#" class="secondary-content"><i class="edit-lunch-item fa fa-pencil"></i></a></td>
        </tr>
        
        `;
      });
      document.querySelector(UISelector.tableBody).innerHTML = eachItem;
    },
    addDinnerToTable: function () {
      const tableHeader = document.querySelector(UISelector.tableHeader);
      tableHeader.innerHTML = `
     <h2> Your Dinner Meal List</h2>
     `;
      const dataItems = ItemCtrl.getDinnerItems();
      // StorageCtrl.StoreBreakfastInLS(dataItems);
      let eachItem = "";
      dataItems.forEach((item) => {
        eachItem += `
        <tr id="item-${item.id}" class="table-row">
        <td>${item.name}</>
        <td>${item.calories}</>
        <td>${item.date[0].date}/${item.date[1].month}/${item.date[2].year}</>
        <td><a href="#" class="secondary-content"><i class="edit-dinner-item fa fa-pencil"></i></a></td>
        </tr>
        
        `;
      });
      document.querySelector(UISelector.tableBody).innerHTML = eachItem;
    },
    getInputData: () => {
      return {
        name: document.querySelector(UISelector.mealInput).value,
        calories: document.querySelector(UISelector.caloriesInput).value,
      };
    },
    clearInputField: () => {
      document.querySelector(UISelector.mealInput).value = "";
      document.querySelector(UISelector.caloriesInput).value = "";
    },
    hideEditState: () => {
      UICtrl.clearInputField();
      document.querySelector(UISelector.updateBreakfastBtn).style.display =
        "none";
      document.querySelector(UISelector.updateLunchBtn).style.display = "none";
      document.querySelector(UISelector.updateDinnerBtn).style.display = "none";
      document.querySelector(UISelector.deleteBreakfastBtn).style.display =
        "none";
      document.querySelector(UISelector.deleteLunchBtn).style.display = "none";
      document.querySelector(UISelector.deleteDinnerBtn).style.display = "none";
      document.querySelector(UISelector.backBtn).style.display = "none";
      document.querySelector(UISelector.breakfastBtn).style.display = "inline";
      document.querySelector(UISelector.lunchBtn).style.display = "inline";
      document.querySelector(UISelector.dinnerBtn).style.display = "inline";
      document.querySelector(UISelector.addMessage).style.display = "block";
    },
    showEditState: (item) => {
      document.querySelector(UISelector.mealInput).value = item.name;
      document.querySelector(UISelector.caloriesInput).value = item.calories;
    },
    hideMealButtons: () => {
      document.querySelector(UISelector.backBtn).style.display = "inline";
      document.querySelector(UISelector.breakfastBtn).style.display = "none";
      document.querySelector(UISelector.lunchBtn).style.display = "none";
      document.querySelector(UISelector.dinnerBtn).style.display = "none";
      document.querySelector(UISelector.addMessage).style.display = "none";
    },
    showBreakfastEditState: () => {
      UICtrl.hideMealButtons();
      document.querySelector(UISelector.updateBreakfastBtn).style.display =
        "inline";
      document.querySelector(UISelector.deleteBreakfastBtn).style.display =
        "inline";
      document.querySelector(UISelector.updateLunchBtn).style.display = "none";
      document.querySelector(UISelector.deleteLunchBtn).style.display = "none";
      document.querySelector(UISelector.updateDinnerBtn).style.display = "none";
      document.querySelector(UISelector.deleteDinnerBtn).style.display = "none";
    },
    showLunchEditState: () => {
      UICtrl.hideMealButtons();
      document.querySelector(UISelector.updateBreakfastBtn).style.display =
        "none";
      document.querySelector(UISelector.deleteBreakfastBtn).style.display =
        "none";
      document.querySelector(UISelector.updateLunchBtn).style.display =
        "inline";
      document.querySelector(UISelector.deleteLunchBtn).style.display =
        "inline";
      document.querySelector(UISelector.updateDinnerBtn).style.display = "none";
      document.querySelector(UISelector.deleteDinnerBtn).style.display = "none";
    },
    showDinnerEditState: () => {
      UICtrl.hideMealButtons();
      document.querySelector(UISelector.updateBreakfastBtn).style.display =
        "none";
      document.querySelector(UISelector.deleteBreakfastBtn).style.display =
        "none";
      document.querySelector(UISelector.updateLunchBtn).style.display = "none";
      document.querySelector(UISelector.deleteLunchBtn).style.display = "none";
      document.querySelector(UISelector.updateDinnerBtn).style.display =
        "inline";
      document.querySelector(UISelector.deleteDinnerBtn).style.display =
        "inline";
    },
    updateBreakfast: (updateItem) => {
      const items = document.querySelectorAll(".table-body tr ");
      const itemsArr = Array.from(items);
      const itemId = `item-${updateItem.id}`;
      itemsArr.forEach((item) => {
        const id = item.getAttribute("id");
        if (id === itemId) {
          document.querySelector(
            `#${id}`
          ).innerHTML = `<td>${updateItem.name}</>
          <td>${updateItem.calories}</>
          <td>${updateItem.date[0].date}/${updateItem.date[1].month}/${updateItem.date[2].year}</>
          <td><a href="#" class="secondary-content"><i class="edit-breakfast-item fa fa-pencil"></i></a></td>`;
        }
      });

      UICtrl.UpdtDelTotalBreakfastCalories();
    },
    updateLunch: (updateItem) => {
      const items = document.querySelectorAll(".table-body tr ");
      const itemsArr = Array.from(items);
      const itemId = `item-${updateItem.id}`;
      itemsArr.forEach((item) => {
        const id = item.getAttribute("id");
        if (id === itemId) {
          document.querySelector(
            `#${id}`
          ).innerHTML = `<td>${updateItem.name}</>
          <td>${updateItem.calories}</>
          <td>${updateItem.date[0].date}/${updateItem.date[1].month}/${updateItem.date[2].year}</>
          <td><a href="#" class="secondary-content"><i class="edit-lunch-item fa fa-pencil"></i></a></td>`;
        }
      });

      UICtrl.UpdtDelTotalLunchCalories();
    },
    updateDinner: (updateItem) => {
      const items = document.querySelectorAll(".table-body tr ");
      const itemsArr = Array.from(items);
      const itemId = `item-${updateItem.id}`;
      itemsArr.forEach((item) => {
        const id = item.getAttribute("id");
        if (id === itemId) {
          document.querySelector(
            `#${id}`
          ).innerHTML = `<td>${updateItem.name}</>
          <td>${updateItem.calories}</>
          <td>${updateItem.date[0].date}/${updateItem.date[1].month}/${updateItem.date[2].year}</>
          <td><a href="#" class="secondary-content"><i class="edit-dinner-item fa fa-pencil"></i></a></td>`;
        }
      });

      UICtrl.UpdtDelTotalDinnerCalories();
    },
    deleteBreakfast: (item) => {
      document.querySelector(`#item-${item.id}`).remove();
      UICtrl.UpdtDelTotalBreakfastCalories();
    },
    deleteLunch: (item) => {
      document.querySelector(`#item-${item.id}`).remove();
      UICtrl.UpdtDelTotalLunchCalories();
    },
    deleteDinner: (item) => {
      document.querySelector(`#item-${item.id}`).remove();
      UICtrl.UpdtDelTotalDinnerCalories();
    },

    hideTableList: () => {
      document.querySelector(UISelector.table).style.display = "none";
    },
    // Display the total breakfast calories
    showTotalBreakfastCalories: (total) => {
      const day = ItemCtrl.getBreakfastDayCount();

      const tr = document.createElement("tr");
      tr.id = "total-breakfast-calories";
      tr.innerHTML = `
      <td><strong><em>Total Calories ${day}:</em></strong></td>
      <td><strong><em>${total}</em></strong></td>
      `;

      document
        .querySelector(UISelector.tableBody)
        .insertAdjacentElement("beforeend", tr);
    },
    // Display the total lunch calories
    showTotalLunchCalories: (total) => {
      const day = ItemCtrl.getLunchDayCount();
      const tr = document.createElement("tr");
      tr.id = "total-lunch-calories";
      tr.innerHTML = `
      <td><strong><em>Total Calories ${day}:</em></strong></td>
      <td><strong><em>${total}</em></strong></td>
      `;

      document
        .querySelector(UISelector.tableBody)
        .insertAdjacentElement("beforeend", tr);
    },
    // Display the total dinner calories
    showTotalDinnerCalories: (total) => {
      const day = ItemCtrl.getDinnerDayCount();
      const tr = document.createElement("tr");
      tr.id = "total-dinner-calories";
      tr.innerHTML = `
      <td><strong><em>Total Calories ${day}:</em></strong></td>
      <td><strong><em>${total}</em></strong></td>
      `;

      document
        .querySelector(UISelector.tableBody)
        .insertAdjacentElement("beforeend", tr);
    },
    // Update total breakfast calories in the UI
    UpdtDelTotalBreakfastCalories: () => {
      const updateTotal = ItemCtrl.totalBreakfastCalories();
      const tdContent = document.querySelector("#total-breakfast-calories");
      tdContent.children[1].innerHTML = `<strong><em>${updateTotal}</em></strong>`;
    },
    // Update total lunch calories in the UI
    UpdtDelTotalLunchCalories: () => {
      const updateTotal = ItemCtrl.totalLunchCalories();
      const tdContent = document.querySelector("#total-lunch-calories");
      tdContent.children[1].innerHTML = `<strong><em>${updateTotal}</em></strong>`;
    },
    // Update total dinner calories in the UI
    UpdtDelTotalDinnerCalories: () => {
      const updateTotal = ItemCtrl.totalDinnerCalories();
      const tdContent = document.querySelector("#total-dinner-calories");
      tdContent.children[1].innerHTML = `<strong><em>${updateTotal}</em></strong>`;
    },
    // Return the UIselector object
    getUISelector: () => {
      return UISelector;
    },
  };
})();

// App Controller
const AppCtrl = ((ItemCtrl, UICtrl) => {
  // Get the UISelector object from the UICtrl
  const UISelector = UICtrl.getUISelector();

  const eventsLoader = () => {
    // Event listener for the back button
    document
      .querySelector(UISelector.backBtn)
      .addEventListener("click", (e) => {
        UICtrl.hideEditState();
      });
    // Event listener for the add breakfast button
    document
      .querySelector(UISelector.breakfastBtn)
      .addEventListener("click", breakfastToSubmit);
    // Event listener for the add lunch button
    document
      .querySelector(UISelector.lunchBtn)
      .addEventListener("click", lunchToSubmit);
    // Event listener for the add dinner button
    document
      .querySelector(UISelector.dinnerBtn)
      .addEventListener("click", dinnerToSubmit);

    // Event listener for the  breakfast list button
    document
      .querySelector(UISelector.breakfastBtnList)
      .addEventListener("click", (e) => {
        UICtrl.addBreakfastToTable();
        const breakfastItems = ItemCtrl.getBreakfastItems();

        if (breakfastItems.length === 0) {
          UICtrl.hideTableList();
          const message = "Your Breakfast list is empty! Add a meal";
          document.querySelector(".message").textContent = message;
        } else {
          document.querySelector(UISelector.table).style.display = "";
          document.querySelector(".message").textContent = "";
        }

        const totalCalories = ItemCtrl.totalBreakfastCalories();
        ItemCtrl.getBreakfastDayCount();
        UICtrl.showTotalBreakfastCalories(totalCalories);

        document
          .querySelector(UISelector.tableBody)
          .addEventListener("click", breakfastToEdit);
        document
          .querySelector(UISelector.updateBreakfastBtn)
          .addEventListener("click", breakfastToUpdate);
        document
          .querySelector(UISelector.deleteBreakfastBtn)
          .addEventListener("click", breakfastToDelete);
        e.preventDefault();
      });

    // Event listener for the  lunch list button
    document
      .querySelector(UISelector.lunchBtnList)
      .addEventListener("click", (e) => {
        UICtrl.addLunchToTable();
        const lunchItems = ItemCtrl.getLunchItems();
        if (lunchItems.length === 0) {
          UICtrl.hideTableList();
          const message = "Your Lunch list is empty! Add a meal";
          document.querySelector(".message").textContent = message;
        } else {
          document.querySelector(UISelector.table).style.display = "";
          document.querySelector(".message").textContent = "";
        }

        const totalCalories = ItemCtrl.totalLunchCalories();
        UICtrl.showTotalLunchCalories(totalCalories);
        ItemCtrl.getLunchDayCount();

        document
          .querySelector(UISelector.tableBody)
          .addEventListener("click", lunchToEdit);
        document
          .querySelector(UISelector.updateLunchBtn)
          .addEventListener("click", lunchToUpdate);
        document
          .querySelector(UISelector.deleteLunchBtn)
          .addEventListener("click", lunchToDelete);
        e.preventDefault();
      });

    // Event listener for the  dinner list button
    document
      .querySelector(UISelector.dinnerBtnList)
      .addEventListener("click", (e) => {
        UICtrl.addDinnerToTable();
        const dinnerItems = ItemCtrl.getDinnerItems();
        if (dinnerItems.length === 0) {
          UICtrl.hideTableList();
          const message = "Your Dinner list is empty! Add a meal";
          document.querySelector(".message").textContent = message;
        } else {
          document.querySelector(UISelector.table).style.display = "";
          document.querySelector(".message").textContent = "";
        }
        const totalCalories = ItemCtrl.totalDinnerCalories();
        UICtrl.showTotalDinnerCalories(totalCalories);
        ItemCtrl.getDinnerDayCount();
        document
          .querySelector(UISelector.tableBody)
          .addEventListener("click", dinnerToEdit);
        document
          .querySelector(UISelector.updateDinnerBtn)
          .addEventListener("click", dinnerToUpdate);
        document
          .querySelector(UISelector.deleteDinnerBtn)
          .addEventListener("click", dinnerToDelete);
        e.preventDefault();
      });
  };

  // Store breakfast items
  function breakfastToSubmit(e) {
    const input = UICtrl.getInputData();
    if (input.name !== "" && input.calories !== "") {
      const breakfastInput = ItemCtrl.addBreakfastItems(
        input.name,
        input.calories
      );
      StorageCtrl.StoreBreakfastInLS(breakfastInput);
    }
    // const breakfastInp = ItemCtrl.getBreakfastItems();

    UICtrl.hideEditState();
    ItemCtrl.logBreakfastData();
    e.preventDefault();
  }
  // Store lunch items
  function lunchToSubmit(e) {
    const input = UICtrl.getInputData();
    if (input.name !== "" && input.calories !== "") {
      const lunchInput = ItemCtrl.addLunchItems(input.name, input.calories);
      StorageCtrl.StoreLunchInLS(lunchInput);
    }

    UICtrl.hideEditState();
    ItemCtrl.logLunchData();
    e.preventDefault();
  }
  // Store dinner items
  function dinnerToSubmit(e) {
    const input = UICtrl.getInputData();
    if (input.name !== "" && input.calories !== "") {
      const dinnerInput = ItemCtrl.addDinnerItems(input.name, input.calories);
      StorageCtrl.StoreDinnerInLS(dinnerInput);
    }

    UICtrl.hideEditState();
    ItemCtrl.logDinnerData();
    e.preventDefault();
  }

  // Breakfast items to edit
  function breakfastToEdit(e) {
    if (e.target.classList.contains("edit-breakfast-item")) {
      let breakfastId = e.target.parentNode.parentNode.parentNode.id;
      const bId = breakfastId.split("-");
      const id = parseInt(bId[1]);
      console.log(id);
      ItemCtrl.setCurrentBreakfast(id);
      const itemToEdit = ItemCtrl.getCurrentBreakfast();
      UICtrl.showEditState(itemToEdit);

      UICtrl.showBreakfastEditState();
    }
    e.preventDefault();
  }
  // Lunch items to edit
  function lunchToEdit(e) {
    if (e.target.classList.contains("edit-lunch-item")) {
      let lunchId = e.target.parentNode.parentNode.parentNode.id;
      const bId = lunchId.split("-");
      const id = parseInt(bId[1]);
      console.log(id);
      ItemCtrl.setCurrentLunch(id);
      const itemToEdit = ItemCtrl.getCurrentLunch();
      UICtrl.showEditState(itemToEdit);

      UICtrl.showLunchEditState();
    }
    e.preventDefault();
  }
  // Dinner items to edit
  function dinnerToEdit(e) {
    if (e.target.classList.contains("edit-dinner-item")) {
      let dinnerId = e.target.parentNode.parentNode.parentNode.id;
      const bId = dinnerId.split("-");
      const id = parseInt(bId[1]);
      console.log(id);
      ItemCtrl.setCurrentDinner(id);
      const itemToEdit = ItemCtrl.getCurrentDinner();
      UICtrl.showEditState(itemToEdit);

      UICtrl.showDinnerEditState();
    }
    e.preventDefault();
  }
  // Update the breakfast item after the update click event
  function breakfastToUpdate(e) {
    const input = UICtrl.getInputData();
    //  ItemCtrl.getCurrentBreakfast();
    const updateItem = ItemCtrl.updateBreakfastItem(input.name, input.calories);
    UICtrl.updateBreakfast(updateItem);
    ItemCtrl.totalBreakfastCalories();
    StorageCtrl.updateBreakfastInLS(updateItem);
    StorageCtrl.totalBreakfastCalories();

    UICtrl.hideEditState();

    e.preventDefault();
  }
  // Update the lunch item after the update click event
  function lunchToUpdate(e) {
    const input = UICtrl.getInputData();
    //  ItemCtrl.getCurrentBreakfast();
    const updateItem = ItemCtrl.updateLunchItem(input.name, input.calories);
    UICtrl.updateLunch(updateItem);
    StorageCtrl.updateLunchInLS(updateItem);
    ItemCtrl.totalLunchCalories();

    UICtrl.hideEditState();
    e.preventDefault();
  }
  // Update the dinner item after the update click event
  function dinnerToUpdate(e) {
    const input = UICtrl.getInputData();
    //  ItemCtrl.getCurrentBreakfast();
    const updateItem = ItemCtrl.updateDinnerItem(input.name, input.calories);
    UICtrl.updateDinner(updateItem);
    StorageCtrl.updateDinnerInLS(updateItem);
    ItemCtrl.totalDinnerCalories();

    UICtrl.hideEditState();
    e.preventDefault();
  }
  // Breakfast item to delete
  function breakfastToDelete() {
    const deleteItem = ItemCtrl.getCurrentBreakfast();
    ItemCtrl.deleteCurrentBreakfast(deleteItem);
    UICtrl.deleteBreakfast(deleteItem);
    StorageCtrl.deleteBreakfastFromLS(deleteItem);
    ItemCtrl.totalBreakfastCalories();
    UICtrl.hideEditState();
  }
  // Lunch item to delete
  function lunchToDelete() {
    const deleteItem = ItemCtrl.getCurrentLunch();
    ItemCtrl.deleteCurrentLunch(deleteItem);
    UICtrl.deleteLunch(deleteItem);
    StorageCtrl.deleteLunchFromLS(deleteItem);
    ItemCtrl.totalLunchCalories();
    UICtrl.hideEditState();
  }
  // Dinner item to delete
  function dinnerToDelete() {
    const deleteItem = ItemCtrl.getCurrentDinner();
    ItemCtrl.deleteCurrentDinner(deleteItem);
    UICtrl.deleteDinner(deleteItem);
    StorageCtrl.deleteDinnerFromLS(deleteItem);
    ItemCtrl.totalDinnerCalories();
    UICtrl.hideEditState();
  }
  // Public method
  return {
    Init: () => {
      UICtrl.hideTableList();
      UICtrl.hideEditState();
      eventsLoader();
    },
  };
})(ItemCtrl, UICtrl);

// Call the AppCtrl function
AppCtrl.Init();
