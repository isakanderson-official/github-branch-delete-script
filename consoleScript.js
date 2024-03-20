const elements = document.querySelectorAll('.iJmJly .hWITRv:nth-child(1)');

async function clickElementsWithDelay() {
  for (const element of elements) {
    await new Promise(resolve => setTimeout(resolve, 500));
    element.click();
  }
}

clickElementsWithDelay();
