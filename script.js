document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.querySelector('.search input');
  const regions = document.querySelectorAll('.region');

  searchInput.addEventListener('input', () => {
    const filter = searchInput.value.toLowerCase();

    regions.forEach(region => {
      const title = region.querySelector('h3').textContent.toLowerCase();
      const cities = region.querySelectorAll('li');
      let regionVisible = false;

      cities.forEach(city => {
        const cityName = city.textContent.toLowerCase();
        const match = cityName.includes(filter) || title.includes(filter);
        city.style.display = match ? '' : 'none';
        if (match) regionVisible = true;
      });

      region.style.display = regionVisible ? '' : 'none';
    });
  });
});
