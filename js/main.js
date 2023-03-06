/* construct manually */
var bar1 = new ldBar("#myItem1");
/* ldBar stored in the element */
var bar2 = document.getElementById('myItem1').ldBar;
bar1.set(53);



// Selector
const counters = document.querySelectorAll('.counter');
// Main function
for(let n of counters) {
  const updateCount = () => {
    const target = + n.getAttribute('data-target');
    const count = + n.innerText;
    const speed = 5000; // change animation speed here
    const inc = target / speed; 
    if(count < target) {
      n.innerText = Math.ceil(count + inc);
      setTimeout(updateCount, 1);
    } else {
      n.innerText = target;
    }
  }
  updateCount();
}


function toggleMobileMenu() {
  document.querySelector('#menu').classList.toggle('active')
  document.querySelector('.mobile-bar').classList.toggle('active')
}


