export function addFog() {
  const fog = document.createElement('div');
  fog.classList.add('fog');

  document.body.append(fog);
}

export function removeFog() {
  const fog = document.querySelector('.fog') as HTMLElement;
  fog.remove();
}
