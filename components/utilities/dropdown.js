function Dropdown() {
  return (
    <div class="navbar mb-2 bg-base-300 rounded-box">
      <div class="flex-1 px-2 lg:flex-none">
        <a class="text-lg font-bold">daisyUI</a>
      </div>
      <div class="flex justify-end flex-1 px-2">
        <div class="flex items-stretch">
          <a class="btn btn-ghost rounded-btn">Button</a>
          <div class="dropdown dropdown-end">
            <div tabindex="0" class="btn btn-ghost rounded-btn">
              Dropdown
            </div>
            <ul
              tabindex="0"
              class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52"
            >
              <li class="dropdown dropdown-end">
                {" "}
                <div tabindex="0" class="btn btn-ghost rounded-btn">
                  Departments
                </div>
                <ul
                  tabindex="0"
                  class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52"
                >
                  <li>Dept1</li> <li>Dept1</li> <li>Dept1</li> <li>Dept1</li>{" "}
                  <li>Dept1</li>{" "}
                </ul>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
