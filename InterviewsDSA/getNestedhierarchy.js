let assert = require("assert");

const employees_v1 = [
  {
    id: 1,
    name: "A",
    managerId: 0,
  },
  {
    id: 2,
    name: "B",
    managerId: 1,
  },
  {
    id: 3,
    name: "C",
    managerId: 1,
  },
  {
    id: 4,
    name: "D",
    managerId: 2,
  },
  {
    id: 5,
    name: "E",
    managerId: 0,
  },
];

//   O(n*2) O(n log n )

//   o(n)
// Output
const output = [
  {
    id: 1,
    name: "A",
    managerId: 0,
    subordinates: [
      {
        id: 2,
        name: "B",
        managerId: 1,
        subordinates: [
          {
            id: 4,
            name: "D",
            managerId: 2,
            subordinates: [],
          },
        ],
      },
      {
        id: 3,
        name: "C",
        managerId: 1,
        subordinates: [],
      },
    ],
  },
  {
    id: 5,
    name: "E",
    managerId: 0,
    subordinates: [],
  },
];

const getNestedHierarchy = (employees) => {
  let result = employees.filter((d) => d.managerId == 0);
  let n = result.length;

  for (let i = 0; i < n; i++) {
    result[i] = {
      ...result[i],
      subordinates: subordinate(result[i].id, employees),
    };
  }

  return result;
};

function subordinate(managerId, employees) {
  let i = 0;
  let n = employees.length;
  let result = [];
  while (i < n) {
    if (i >= n) {
      return result;
    }
    let currentEmployee = employees[i];

    if (employees[i].managerId === managerId) {
      result.push({
        ...currentEmployee,
        subordinates: subordinate(currentEmployee.id, employees),
      });
    }
    i++;
  }
  return result;
}

// console.log(JSON.stringify(getNestedHierarchy(employees_v1)));
// console.log(assert(output,getNestedHierarchy(employees_v1)));

// output -
[
  {
    id: 1,
    name: "A",
    managerId: 0,
    subordinates: [
      {
        id: 2,
        name: "B",
        managerId: 1,
        subordinates: [{ id: 4, name: "D", managerId: 2, subordinates: [] }],
      },
      { id: 3, name: "C", managerId: 1, subordinates: [] },
    ],
  },
  { id: 5, name: "E", managerId: 0, subordinates: [] },
];

/**
 * Creates a nested hierarchy of employees based on manager relationships
 * @param {Array} employees - Array of employee objects with id and managerId properties
 * @returns {Array} Hierarchical structure of employees
 */
const getNestedHierarchy_v2 = (employees) => {
  // Create a map for faster lookups
  const employeeMap = new Map();

  // Initialize the map with all employees
  employees.forEach((employee) => {
    employeeMap.set(employee.id, {
      ...employee,
      subordinates: [],
    });
  });

  // Build the hierarchy
  const result = [];

  employees.forEach((employee) => {
    const currentEmployee = employeeMap.get(employee.id);

    if (employee.managerId === 0) {
      // Top-level employees (reporting to managerId 0)
      result.push(currentEmployee);
    } else if (employeeMap.has(employee.managerId)) {
        console.log(employee.managerId, employeeMap.get(employee.managerId));
      // Add employee to their manager's subordinates
      employeeMap.get(employee.managerId).subordinates.push(currentEmployee);
    }
  });

  return result;
};

console.log(JSON.stringify(getNestedHierarchy_v2(employees_v1)));

let result = [
  {
    id: 1,
    name: "A",
    managerId: 0,
    subordinates: [
      {
        id: 2,
        name: "B",
        managerId: 1,
        subordinates: [{ id: 4, name: "D", managerId: 2, subordinates: [] }],
      },
      { id: 3, name: "C", managerId: 1, subordinates: [] },
    ],
  },
  { id: 5, name: "E", managerId: 0, subordinates: [] },
];
