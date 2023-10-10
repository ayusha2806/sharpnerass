var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e) {
  e.preventDefault();

  // Get input values
  var itemName = document.getElementById('itemName').value;
  var itemDescription = document.getElementById('itemDescription').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';

  // Create div for item details
  var itemDetails = document.createElement('div');
  itemDetails.className = 'item-details';

  // Add text node with input values
  itemDetails.innerHTML = '<strong>Name:</strong> ' + itemName + '<br><strong>Description:</strong> ' + itemDescription;

  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button and item details to li
  li.appendChild(deleteBtn);
  li.appendChild(itemDetails);

  // Append li to list
  itemList.appendChild(li);

  // Clear input fields
  document.getElementById('itemName').value = '';
  document.getElementById('itemDescription').value = '';
}

// Filter Items
function filterItems() {
  // convert text to lowercase
  var text = filter.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item) {
    var itemDetails = item.getElementsByClassName('item-details')[0].innerText.toLowerCase();
    if (itemDetails.indexOf(text) != -1) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
