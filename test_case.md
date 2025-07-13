# 🚀 Future Test Cases to Cover

This section lists test cases that are not yet automated, but should be considered for future implementation to increase test coverage.

---

## ✅ UI Test Cases

### [TC-13] - Required Field Validation on Create Task
- Leave the title field empty
- Attempt to save the task
- Verify that a "Title is required" error appears

---

### [TC-14] - Priority Selection Validation
- Try creating a task without selecting a priority
- Verify that a "Priority is required" error appears

---

### [TC-15] - Max Length Validation
- Enter a title exceeding allowed length (e.g. 255+ chars)
- Attempt to save the task
- Verify that an appropriate error message appears

---

### [TC-16] - Drag and Drop Task
- Drag a task from "Backlog" to "Todo"
- Verify the status is updated in the UI
- Optionally verify via API that the task’s status changed

---

### [TC-17] - Logout Functionality
- Log in as a user
- Click "Logout"
- Verify the user is redirected to the login page
- Try accessing the dashboard directly and verify redirect back to login

---

### [TC-18] - Session Timeout
- Log in and remain inactive until the session times out
- Attempt to perform an action
- Verify the user is forced to log in again

---

### [TC-19] - Responsive UI
- Check the Kanban board layout on:
    - Desktop
    - Tablet
    - Mobile
- Ensure no UI overlaps or broken elements

---

### [TC-20] - Accessibility Checks
- Navigate the UI using keyboard only
- Verify focus indicators are visible
- Check presence of ARIA labels on major elements

---

## ✅ API Test Cases

### [TC-21] - Create Task Without Required Fields
- Send a POST request to `/api/tasks` with missing:
    - title
    - priority
- Expect response status 400 with validation errors

---

### [TC-22] - Delete Non-Existent Task
- Send a DELETE request to `/api/tasks/{invalidId}`
- Expect 404 Not Found

---

### [TC-23] - Update Non-Existent Task
- Send a PUT request to `/api/tasks/{invalidId}`
- Expect 404 Not Found

---

### [TC-24] - Authentication Required for Task Endpoints
- Attempt to call `/api/tasks` without auth token or cookies
- Expect 401 Unauthorized

---

### [TC-25] - Performance Test - Bulk Task Creation
- Create a large number of tasks (e.g. 500+)
- Measure response times
- Ensure system remains stable under load

---

### [TC-26] - Check Data Consistency Between UI and API
- Create or edit a task via API
- Refresh the UI dashboard
- Verify task data matches exactly

---

