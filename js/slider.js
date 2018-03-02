/*========== SLIDER MOSAICO ONEPAGE ======= */
$(function(){
	$('.mosaico .container .mosaico-wrapper').slick({
		centerMode:false,
		slidesToShow:6,
		arrows:false,
		responsive:[

/*breakpoint 768 */
		{
			breakpoint:768,
			settings:{
				arrows:false,
				centerMode:true,
				slidesToShow:3
			}
		},

/*breakpoint 580*/
		{
			breakpoint:580,
			settings:{
				arrows:false,
				centerMode:true,
				slidesToShow:2
			}

		},

/*breakpoint 580*/
		{
			breakpoint:380,
			settings:{
				arrows:false,
				centerMode:true,
				slidesToShow:1	
			}
		},

		]
	});


/*==========  SLIDER DO TRATAMENTOS ======= */
	$('.tratamentos .container').slick({
		centerMode:false,
		slidesToShow:3,
		arrows:false,
		infinite:false,
		responsive:[
			{

/*breakpoint 768*/				
				breakpoint:768,
				settings:{
					arrows:false,
					dots:true,
					infinite:false,
					centerMode:false,
					slidesToShow:2
				}
			},
			
/*breakpoint 480*/
			{	
				breakpoint:480,
				settings:{
					arrows:false,
					dots:true,
					infinite:false,
					centerMode:false,
					slidesToShow:1

				}

			},

		]

	});
/*==========  SLIDER DO DEPOIMENTOS ======= */	
	$('.depoimentos .container').slick({
		centerMode:false,
		slidesToShow:1,
		arrows:false,
		dots:true,
		infinite:false,

	});
})