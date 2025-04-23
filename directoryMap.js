
 const directory = {
    name: 'project',
    isFolder: true,
    children: [
      {
        name: 'public',
        isFolder: true,
        children: [
          {
            name: 'index.html',
            isFolder: false,
          },
          {
            name: 'favicon.ico',
            isFolder: false,
          },
        ],
      },
      {
        name: 'src',
        isFolder: true,
        children: [
          {
            name: 'index.css',
            isFolder: false,
          },
          {
            name: 'index.js',
            isFolder: false,
          },
          {
            name: 'scripts',
            isFolder: true,
            children: [
              {
                name: 'about.js',
                isFolder: false,
              },
              {
                name: 'home.js',
                isFolder: false,
              },
            ],
          },
        ],
      },
    ],
  };




const directoryMap = (directory, entry) => {
  const helper = (directory) => {
    const { name, isFolder, children } = directory;
    if (isFolder) {
      var el = document.createElement("details");
    } else {
      var el = document.createElement("p");
    }

    const fname = document.createElement("summary");
    fname.innerText = name;
    el.appendChild(fname);
    const desc = document.createElement("p");

    if (isFolder) {
      const fragment = document.createDocumentFragment();
      for (let child of children) {
        fragment.appendChild(helper(child));
      }
      desc.appendChild(fragment);
    }

    el.appendChild(desc);
    return el;
  };

  const domElement = helper(directory);
  if (domElement !== null) {
    entry.appendChild(domElement);
  }
};
