
function renderData() {
    let arrCourse = JSON.parse(localStorage.getItem("studentManagement")) || [];
    let listCourse = document.getElementById("listCourse");
    listCourse.innerHTML = "";
    //forEach(functionCallback,thisValue)
    //functionCallback(element,index,arr)
    arrCourse.forEach((course, index) => {
        listCourse.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${course.courseId}</td>
                <td>${course.courseName}</td>
                <td>${course.courseTime}</td>
                <td>${course.status ? "Hoạt động" : "Không hoạt động"}</td>
                <td>
                    <i class="fa-solid fa-pen-to-square" id="editCourse"></i>
                    <i class="fa-solid fa-trash" id="deleteCourse"></i>
                </td>
            </tr>
        `
    });
}
var newCourseModal = new bootstrap.Modal(document.getElementById('newCourse'), {
    keyboard: false
})
document.getElementById("btnCreateCourse").addEventListener("click", function () {
    //1. Lấy dữ liệu arrCourse từ localStorage
    let arrCourse = JSON.parse(localStorage.getItem("studentManagement")) || [];
    //2. Lấy dữ liệu trên modal
    let courseId = document.getElementById("courseId").value;
    let courseName = document.getElementById("courseName").value;
    let courseTime = document.getElementById("courseTime").value;
    let status = document.querySelector("input[type='radio']:checked").value == "true" ? true : false;
    let newCourse = { courseId, courseName, courseTime, status, arrClass: [] };
    //3. push dư liệu thêm mới vào arrCourse
    arrCourse.push(newCourse);
    //4. Đẩy arrCourse vào localStorage
    localStorage.setItem("studentManagement", JSON.stringify(arrCourse));
    //5. Đóng modal
    document.getElementById("courseId").value = "";
    document.getElementById("courseName").value = "";
    document.getElementById("courseTime").value = "";
    document.getElementById("active").checked = true;
    newCourseModal.hide();
    //6. render lại dữ liệu
    renderData();

})
window.onload = renderData();