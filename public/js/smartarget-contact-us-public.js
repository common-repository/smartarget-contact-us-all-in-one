function init_contact_us (hash)
{
	if (!hash)
	{
		return;
	}

	insertJs_contact_us(hash);
}

function insertJs_contact_us (hash)
{
	var script = document.createElement("script");
	script.type = "text/javascript";
	script.src = `https://smartarget.online/loader.js?ver=${Math.random()}&u=${hash}&source=wordpress_contact_us`;
	document.head.appendChild(script);
}

init_contact_us(smartarget_contact_us_params.hash);
