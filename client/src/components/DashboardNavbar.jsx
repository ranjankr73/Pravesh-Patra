import { NavLink } from "react-router-dom";
const DashboardNavbar = () => {
  return (
    <div className="flex flex-1 h-screen">
      <aside className="w-64 bg-white shadow-md">
        <nav className="p-4">
          <ul>
            <li className="mb-4">
              <NavLink
                to="/dashboard/profile"
                className="text-blue-500 hover:underline"
              >
                Profile
              </NavLink>
            </li>
            <li className="mb-4">
              <NavLink to="/dashboard/overview" className="text-blue-500 hover:underline">
                Dashboard
              </NavLink>
            </li>
            <li className="mb-4">
              <NavLink to="/dashboard/summary" className="text-blue-500 hover:underline">
                Attendance Summary
              </NavLink>
            </li>
            <li className="mb-4">
              <NavLink to="/dashboard/monthly" className="text-blue-500 hover:underline">
                Attendance Summary Monthly
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default DashboardNavbar;