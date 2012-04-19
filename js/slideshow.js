$(document).ready(function()
{
	var slideShowContainer = $('#slide-show');

	var arr = {};
	var items = [
				'bestbuy,http://www.bestbuy.com/',
	 			'grainger,http://www.grainger.com/Grainger/wwg/start.shtml',
	 			'motorola,http://www.motorola.com/us',
	 			'westinghouse,http://www.westinghouse.com/',
	 			'bnfl,http://www.bnfl.com/',
	 			'republic,http://www.republicservices.com/',
	 			'advocate,http://www.advocatehealth.com/condell/',
	 			'centreclub,http://www.advocatehealth.com/condell/welcometothecentreclub',
	 			'cpidaylighting,http://www.cpidaylighting.com',
	 			'marvin,http://www.marvinwin.com/',
	 			'midtown,http://www.midtown.com/bannockburn/Pages/default.aspx',
	 			'chidry,http://chidry.com/',
	 			'pci,http://www.pci-energy.com/',
	 			'maurey,http://www.gonetsolutions.com/maureyinstrument/',
	 			'clinical,http://www.clinicalresource.net/',
	 			'lakeforestclub,http://www.gonetsolutions.com/lfc/index.html',
	 			'stranberg,http://70.86.183.130/~stranber/stranberg-resource-group.php?page=home',
	 			'sun,http://www.sunsignals.com/',
	 			'preferred,http://preferred-electric.com/main.html',
	 			'fourseasons,http://gonetsolutions.com/4seas/index.php?page=home',
	 			'herion,http://www.herionroofing.com/',
	 			'nssign,http://www.gonetsolutions.com/nss/main/index.html',
	 			'bestcourier,http://www.bestcourier.com/',
	 			'fabrication,http://www.gonetsolutions.com/fabricat/',
	 			'greenleaf,http://www.greenleafcenter.com/',
	 			'ifsc,http://ifsc.com/',
	 			'mccaffrey,http://www.mccaffrey3.com/',
	 			'sharedpen,http://www.sharedpen.com/site/',
	 			'lyon,http://www.gonetsolutions.com/~lyonindu/',
	 			'ecowrap,http://www.ecowrap.com/'
	 			];

	for(var i=0; i<items.length; i++)
	{

   		var item = items[i];
   		var values = item.split(',');
   
   		arr[values[0]] = values[1];

   		var thumbnail = $('<span></span>').addClass('thumbnail');
   		
   		var imgThumb = $('<a href="" id="'+values[0]+'"><img src="images/portfolio/'+values[0]+'.jpg" height="80px" width="80px" /></a>');
   		$(thumbnail).append(imgThumb);
   		slideShowContainer.append(thumbnail);

   		//var img = $('<img src="images/portfolio/'+values[0]+'.jpg" />');

   		$(imgThumb).click(function(e){
			e.preventDefault();
			var imgName = $(this).attr('id');
			var link = arr[$(this).attr('id')];
   			var clickHTML = $('<a href="'+link+'"><img src="images/portfolio/'+imgName+'.jpg" height="506px" width="720px" /></a>');

			$('#main-image').html(clickHTML);
		});
	}
});