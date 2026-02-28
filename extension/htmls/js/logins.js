document.addEventListener("DOMContentLoaded", async () => {
	const casillaWeb = document.getElementById("input-website");	
	const tabs = await browser.tabs.query({
	active: true,
	currentWindow: true
	});

	const url = tabs[0].url;

	// Extraer el dominio (ej: amazon.com)
	const dominio = new URL(url).hostname;

	casillaWeb.value = dominio;
})
