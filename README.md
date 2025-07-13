# Employee Dashboard & Management App

A modern, responsive employee management dashboard built with React and Tailwind CSS. This application provides a clean user interface for viewing key company metrics, managing employees, and handling user authentication.

---

### ✨ Live Demo

https://workflow-project.vercel.app/login




## 🚀 Features

*   **Secure Authentication:** Modern Login and Sign-Up pages with form validation.
*   **Interactive Dashboard:** At-a-glance view of key statistics like total employees, active tasks, and interns.
*   **Data Visualization:** Bar chart for employee activity and a calendar for attendance overview.
*   **Employee Management:** A dedicated page to list employees and add new ones via a sleek modal form.
*   **Responsive Design:** A seamless experience on both desktop and mobile devices.
*   **Component-Based:** Built with reusable and modular React components for maintainability.

---

## 🛠️ Tools & Technologies Used

*   **Framework:** [React](https://reactjs.org/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Routing:** [React Router](https://reactrouter.com/)
*   **Charting:** [Recharts](https://recharts.org/)
*   **Icons:** [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
*   **Development Tools:** [Vite](https://vitejs.dev/) / [Create React App](https://create-react-app.dev/), [Git](https://git-scm.com/)

---

## 🤔 Development Approach & Decisions

This project was developed with a focus on modern web standards, reusability, and a clean user experience.

1.  **Component-Driven Architecture:**
    *   The application is broken down into small, reusable components (e.g., `StatCard`, `Sidebar`, `AddEmployeeModal`). This approach makes the codebase easier to manage, test, and scale.
    *   Pages (like `DashboardHome` and `EmployeeListPage`) are used to compose these components into meaningful views.

2.  **Utility-First CSS with Tailwind:**
    *   I chose Tailwind CSS to enable rapid development and maintain a consistent design system without writing custom CSS files. This allows for quick iteration on UI elements and ensures that components are styled consistently across the application. The `tailwind.config.js` file was customized to include the project's specific color palette (e.g., `primary`, `light-bg`).

3.  **Client-Side Routing:**
    *   `react-router-dom` was used to handle all navigation within the app. A protected route structure was implemented in `App.js` to ensure that users must be authenticated to access the dashboard, providing a layer of security.

4.  **Data Visualization with Recharts:**
    *   For the "Employee Activity" chart on the dashboard, I chose the `recharts` library. It's a powerful and composable charting library for React that made it easy to create a visually appealing and informative bar chart that closely matched the design mockups.

5.  **Modal Implementation with React Portals:**
    *   The "Add New Employee" modal was built using `ReactDOM.createPortal`. This is a best practice in React for rendering modals, as it attaches the modal to the root of the DOM, preventing complex z-index and CSS stacking context issues that can arise when a modal is nested deep inside other components.

---

## ⚙️ How to Run Locally

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/YourUsername/your-repo-name.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd your-repo-name
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    ```
4.  **Start the development server:**
    ```bash
    npm start
    ```
5.  Open [http://localhost:3000](http://localhost:3000) to view it in your browser.# workflow-project
