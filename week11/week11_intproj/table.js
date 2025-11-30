const API_URL = import.meta.env.VITE_APP_URL
const tbody = document.querySelector("#studyplan")

async function StudyPlans() {
  try { 
    const response = await fetch(`${API_URL}/study-plans`, { headers: { Accept: "application/json" } });
    if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);

    const rows = await response.json();

    rows.forEach((row) =>{
      
      const trElement = document.createElement("tr");
      trElement.className = "ecors-row";

      const trIdElement = document.createElement("td");
      trIdElement.className = "border px-4 py-3 ecors-id";
      trIdElement.textContent = row.id;

      const trPlanElement = document.createElement("td");
      trPlanElement.className = "border px-4 py-3 ecors-planCode";
      trPlanElement.textContent = row.planCode;

      const trNameEnElement = document.createElement("td");
      trNameEnElement.className = "border px-4 py-3 ecors-nameEng"; 
      trNameEnElement.textContent = row.nameEng;

      const trNameThElement = document.createElement("td");
      trNameThElement.className = "border px-4 py-3 ecors-nameTh"; 
      trNameThElement.textContent = row.nameTh;

      trElement.append(trIdElement, trPlanElement, trNameEnElement, trNameThElement);
      tbody.appendChild(trElement);
    });

    if (!rows.length) {
      const nodata_tr = document.createElement("tr");
      const nodata_td = document.createElement("td");

      nodata_td.className = "px-4 py-3";
      nodata_td.textContent = "No data";
      nodata_tr.appendChild(nodata_td);
      tbody.appendChild(nodata_tr);
      return;
    }

  } catch (error) {
    console.error("Error fetching data:", error);

    const dialog = document.createElement("dialog");
    dialog.className = "ecors-dialog rounded-2xl p-4 mx-100 mt-70 w-full max-w-md bg-white p-6 shadow-2xl";
    dialog.setAttribute("closedby", "none")

    const message = document.createElement("p");
    message.className = "ecors-dialog-message mt-1 text-sm text-red-700";
    message.textContent = "There is a problem. Please try again later.";

    dialog.appendChild(message);

    tbody.appendChild(dialog);

    dialog.showModal();
  }
}

StudyPlans();
