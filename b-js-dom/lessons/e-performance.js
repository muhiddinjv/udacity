// (A) slow b/c appends div 200x ------------------
const a = performance.now();
for (let i = 1; i <= 200; i++) {
  const newElement = document.createElement('p');
  newElement.textContent = 'This is paragraph number ' + i;
  document.body.appendChild(newElement);
}
const b = performance.now();
const testa = `Test A speed: ${b-a}ms`
console.log(testa);


// (B) fast b/c appends div once ----------------------
const c = performance.now();
const myCustomDiv = document.createElement('div');
for (let i = 1; i <= 200; i++) {
  const newElement = document.createElement('p');
  newElement.innerText = 'This is paragraph number ' + i;
  myCustomDiv.appendChild(newElement);
}
document.body.appendChild(myCustomDiv);
const d = performance.now();
const testb = `Test B speed: ${d-c}ms`
console.log(testb);

// (C) documentFragment --------------------------------------
// the documentFragment isn't part of the active dom tree, changes made to the fragment don't affect the dom, cause reflow, or incur any performance impact that can occur when changes are made. In other words, changes made to a DocumentFragment happen off-screen; there's no reflow and repaint cost while you build this. So this is exactly what we need!

const e = performance.now();
const fragment = document.createDocumentFragment();  // ← uses a DocumentFragment instead of a <div>

for (let i = 0; i < 200; i++) {
    const newElement = document.createElement('p');
    newElement.innerText = 'This is paragraph number ' + i;
    fragment.appendChild(newElement);
}
document.body.appendChild(fragment); // reflow & repaint once!
const f = performance.now();
const testc = `Test C speed: ${f-e}ms`
console.log(testc);