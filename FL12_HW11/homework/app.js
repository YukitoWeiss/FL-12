const structure = [
  {
    'folder': true,
    'title': 'Films',
    'children': [
      {
        'title': 'Iron Man.avi'
      },
      {
        'folder': true,
        'title': 'Fantasy',
        'children': [
          {
            'title': 'The Lord of the Rings.avi'
          },
          {
            'folder': true,
            'title': 'New folder 1',
            'children': false
          }
        ]
      }
    ]
  },
  {
    'folder': true,
    'title': 'Documents',
    'children': [
      {
        'folder': true,
        'title': 'EPAM Homework answers',
        'children': null
      }
    ]
  }
];

const rootNode = document.getElementById('root');


function createFileTree(container, arr) {

  let ulParent = document.createElement('ul');

  arr.forEach(function (element) {
    if (element.children) {
      let liFolder = document.createElement('li'),
        span = document.createElement('span'),
        icon = document.createElement('i'),
        iconClosed = document.createElement('i');

      icon.className = 'material-icons closed';
      iconClosed.className = 'material-icons';
      icon.append(document.createTextNode('folder_open'));
      iconClosed.append(document.createTextNode('folder'));
      span.className = 'folder';
      span.appendChild(icon);
      span.appendChild(iconClosed);
      span.append(document.createTextNode(`${element.title}`));
      liFolder.appendChild(span);
      ulParent.appendChild(liFolder);

      createFileTree(liFolder, element.children);
    } else if (element.folder && !element.children) {
      let liFolder = document.createElement('li'),
        span = document.createElement('span'),
        icon = document.createElement('i'),
        iconClosed = document.createElement('i'),
        ulEmpty = document.createElement('ul'),
        liEmpty = document.createElement('li');

      icon.className = 'material-icons closed';
      icon.append(document.createTextNode('folder_open'));
      iconClosed.className = 'material-icons';
      iconClosed.append(document.createTextNode('folder'));
      span.className = 'folder';
      span.appendChild(icon);
      span.appendChild(iconClosed);
      span.append(document.createTextNode(`${element.title}`));
      liEmpty.className = 'empty';
      liEmpty.append(document.createTextNode('Folder is empty'));
      ulEmpty.appendChild(liEmpty);
      ulEmpty.className = 'emptyList';
      liFolder.appendChild(span);
      liFolder.appendChild(ulEmpty);
      ulParent.appendChild(liFolder);
    } else {
      let liFolder = document.createElement('li'),
        span = document.createElement('span'),
        icon = document.createElement('i');

      icon.className = 'material-icons';
      icon.append(document.createTextNode('insert_drive_file'));

      span.className = 'file';
      span.appendChild(icon);
      span.append(document.createTextNode(`${element.title}`));

      liFolder.appendChild(span);
      ulParent.appendChild(liFolder);

    }

    container.appendChild(ulParent);
  });
  let ulNodeList = document.getElementsByTagName('ul');

  for (let i = 1; i < ulNodeList.length; i++) {
    if (ulNodeList[i].classList.contains('emptyList')) {
      ulNodeList[i].className = 'emptyList nested closed ';
    } else {
      ulNodeList[i].className = 'nested closed';
    }
  }
}

createFileTree(rootNode, structure);

let folder = document.getElementsByClassName('folder');

for (let i = 0; i < folder.length; i++) {
  folder[i].addEventListener('click', function () {
    this.parentElement.querySelector('.nested').classList.toggle('closed');
    this.children[0].classList.toggle('closed');
    this.children[1].classList.toggle('closed');
  });
}


