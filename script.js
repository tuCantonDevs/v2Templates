function generar(){
  let idCasaUno  = document.getElementById('id_1').value,
      idCasaDos  = document.getElementById('id_2').value,
      idCasaTres = document.getElementById('id_3').value,
      iCasaUno   = document.getElementById('i_1').value,
      iCasaDos   = document.getElementById('i_2').value,
      iCasaTres  = document.getElementById('i_3').value,
      pCasaUno   = document.getElementById('p_1').value,
      pCasaDos   = document.getElementById('p_2').value,
      pCasaTres  = document.getElementById('p_3').value;


var template = `<!doctype html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
    <head>
        <!-- NAME: SIMPLE TEXT -->
        <!--[if gte mso 15]>
        <xml>
            <o:OfficeDocumentSettings>
            <o:AllowPNG/>
            <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
        </xml>
        <![endif]-->
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Tu Cantón</title>

    <style type="text/css">
		p{
			margin:10px 0;
			padding:0;
		}
		table{
			border-collapse:collapse;
		}
		h1,h2,h3,h4,h5,h6{
			display:block;
			margin:0;
			padding:0;
		}
		img,a img{
			border:0;
			height:auto;
			outline:none;
			text-decoration:none;
		}
		body,#bodyTable,#bodyCell{
			height:100%;
			margin:0;
			padding:0;
			width:100%;
		}
		.mcnPreviewText{
			display:none !important;
		}
		#outlook a{
			padding:0;
		}
		img{
			-ms-interpolation-mode:bicubic;
		}
		table{
			mso-table-lspace:0pt;
			mso-table-rspace:0pt;
		}
		.ReadMsgBody{
			width:100%;
		}
		.ExternalClass{
			width:100%;
		}
		p,a,li,td,blockquote{
			mso-line-height-rule:exactly;
		}
		a[href^=tel],a[href^=sms]{
			color:inherit;
			cursor:default;
			text-decoration:none;
		}
		p,a,li,td,body,table,blockquote{
			-ms-text-size-adjust:100%;
			-webkit-text-size-adjust:100%;
		}
		.ExternalClass,.ExternalClass p,.ExternalClass td,.ExternalClass div,.ExternalClass span,.ExternalClass font{
			line-height:100%;
		}
		a[x-apple-data-detectors]{
			color:inherit !important;
			text-decoration:none !important;
			font-size:inherit !important;
			font-family:inherit !important;
			font-weight:inherit !important;
			line-height:inherit !important;
		}
		#bodyCell{
			padding:10px;
		}
		.templateContainer{
			max-width:600px !important;
		}
		a.mcnButton{
			display:block;
		}
		.mcnImage,.mcnRetinaImage{
			vertical-align:bottom;
		}
		.mcnTextContent{
			word-break:break-word;
		}
		.mcnTextContent img{
			height:auto !important;
		}
		.mcnDividerBlock{
			table-layout:fixed !important;
		}
	/*
	@tab Page
	@section Background Style
	@tip Set the background color and top border for your email. You may want to choose colors that match your company's branding.
	*/
		body,#bodyTable{
			/*@editable*/background-color:#FFFFFF;
			/*@editable*/background-image:none;
			/*@editable*/background-repeat:no-repeat;
			/*@editable*/background-position:center;
			/*@editable*/background-size:cover;
		}
	/*
	@tab Page
	@section Background Style
	@tip Set the background color and top border for your email. You may want to choose colors that match your company's branding.
	*/
		#bodyCell{
			/*@editable*/border-top:0;
		}
	/*
	@tab Page
	@section Email Border
	@tip Set the border for your email.
	*/
		.templateContainer{
			/*@editable*/border:0;
		}
	/*
	@tab Page
	@section Heading 1
	@tip Set the styling for all first-level headings in your emails. These should be the largest of your headings.
	@style heading 1
	*/
		h1{
			/*@editable*/color:#202020;
			/*@editable*/font-family:Helvetica;
			/*@editable*/font-size:26px;
			/*@editable*/font-style:normal;
			/*@editable*/font-weight:bold;
			/*@editable*/line-height:125%;
			/*@editable*/letter-spacing:normal;
			/*@editable*/text-align:left;
		}
	/*
	@tab Page
	@section Heading 2
	@tip Set the styling for all second-level headings in your emails.
	@style heading 2
	*/
		h2{
			/*@editable*/color:#202020;
			/*@editable*/font-family:Helvetica;
			/*@editable*/font-size:22px;
			/*@editable*/font-style:normal;
			/*@editable*/font-weight:bold;
			/*@editable*/line-height:125%;
			/*@editable*/letter-spacing:normal;
			/*@editable*/text-align:left;
		}
	/*
	@tab Page
	@section Heading 3
	@tip Set the styling for all third-level headings in your emails.
	@style heading 3
	*/
		h3{
			/*@editable*/color:#202020;
			/*@editable*/font-family:Helvetica;
			/*@editable*/font-size:20px;
			/*@editable*/font-style:normal;
			/*@editable*/font-weight:bold;
			/*@editable*/line-height:125%;
			/*@editable*/letter-spacing:normal;
			/*@editable*/text-align:left;
		}
	/*
	@tab Page
	@section Heading 4
	@tip Set the styling for all fourth-level headings in your emails. These should be the smallest of your headings.
	@style heading 4
	*/
		h4{
			/*@editable*/color:#202020;
			/*@editable*/font-family:Helvetica;
			/*@editable*/font-size:18px;
			/*@editable*/font-style:normal;
			/*@editable*/font-weight:bold;
			/*@editable*/line-height:125%;
			/*@editable*/letter-spacing:normal;
			/*@editable*/text-align:left;
		}
	/*
	@tab Header
	@section Header Style
	@tip Set the borders for your email's header area.
	*/
		#templateHeader{
			/*@editable*/border-top:0;
			/*@editable*/border-bottom:0;
		}
	/*
	@tab Header
	@section Header Text
	@tip Set the styling for your email's header text. Choose a size and color that is easy to read.
	*/
		#templateHeader .mcnTextContent,#templateHeader .mcnTextContent p{
			/*@editable*/color:#202020;
			/*@editable*/font-family:Helvetica;
			/*@editable*/font-size:16px;
			/*@editable*/line-height:150%;
			/*@editable*/text-align:left;
		}
	/*
	@tab Header
	@section Header Link
	@tip Set the styling for your email's header links. Choose a color that helps them stand out from your text.
	*/
		#templateHeader .mcnTextContent a,#templateHeader .mcnTextContent p a{
			/*@editable*/color:#2BAADF;
			/*@editable*/font-weight:normal;
			/*@editable*/text-decoration:underline;
		}
	/*
	@tab Body
	@section Body Style
	@tip Set the borders for your email's body area.
	*/
		#templateBody{
			/*@editable*/border-top:0;
			/*@editable*/border-bottom:0;
		}
	/*
	@tab Body
	@section Body Text
	@tip Set the styling for your email's body text. Choose a size and color that is easy to read.
	*/
		#templateBody .mcnTextContent,#templateBody .mcnTextContent p{
			/*@editable*/color:#202020;
			/*@editable*/font-family:Helvetica;
			/*@editable*/font-size:16px;
			/*@editable*/line-height:150%;
			/*@editable*/text-align:left;
		}
	/*
	@tab Body
	@section Body Link
	@tip Set the styling for your email's body links. Choose a color that helps them stand out from your text.
	*/
		#templateBody .mcnTextContent a,#templateBody .mcnTextContent p a{
			/*@editable*/color:#2BAADF;
			/*@editable*/font-weight:normal;
			/*@editable*/text-decoration:underline;
		}
	/*
	@tab Footer
	@section Footer Style
	@tip Set the borders for your email's footer area.
	*/
		#templateFooter{
			/*@editable*/border-top:0;
			/*@editable*/border-bottom:0;
		}
	/*
	@tab Footer
	@section Footer Text
	@tip Set the styling for your email's footer text. Choose a size and color that is easy to read.
	*/
		#templateFooter .mcnTextContent,#templateFooter .mcnTextContent p{
			/*@editable*/color:#202020;
			/*@editable*/font-family:Helvetica;
			/*@editable*/font-size:12px;
			/*@editable*/line-height:150%;
			/*@editable*/text-align:left;
		}
	/*
	@tab Footer
	@section Footer Link
	@tip Set the styling for your email's footer links. Choose a color that helps them stand out from your text.
	*/
		#templateFooter .mcnTextContent a,#templateFooter .mcnTextContent p a{
			/*@editable*/color:#202020;
			/*@editable*/font-weight:normal;
			/*@editable*/text-decoration:underline;
		}
	@media only screen and (min-width:768px){
		.templateContainer{
			width:600px !important;
		}

}	@media only screen and (max-width: 480px){
		body,table,td,p,a,li,blockquote{
			-webkit-text-size-adjust:none !important;
		}

}	@media only screen and (max-width: 480px){
		body{
			width:100% !important;
			min-width:100% !important;
		}

}	@media only screen and (max-width: 480px){
		#bodyCell{
			padding-top:10px !important;
		}

}	@media only screen and (max-width: 480px){
		.mcnRetinaImage{
			max-width:100% !important;
		}

}	@media only screen and (max-width: 480px){
		.mcnImage{
			width:100% !important;
		}

}	@media only screen and (max-width: 480px){
		.mcnCartContainer,.mcnCaptionTopContent,.mcnRecContentContainer,.mcnCaptionBottomContent,.mcnTextContentContainer,.mcnBoxedTextContentContainer,.mcnImageGroupContentContainer,.mcnCaptionLeftTextContentContainer,.mcnCaptionRightTextContentContainer,.mcnCaptionLeftImageContentContainer,.mcnCaptionRightImageContentContainer,.mcnImageCardLeftTextContentContainer,.mcnImageCardRightTextContentContainer,.mcnImageCardLeftImageContentContainer,.mcnImageCardRightImageContentContainer{
			max-width:100% !important;
			width:100% !important;
		}

}	@media only screen and (max-width: 480px){
		.mcnBoxedTextContentContainer{
			min-width:100% !important;
		}

}	@media only screen and (max-width: 480px){
		.mcnImageGroupContent{
			padding:9px !important;
		}

}	@media only screen and (max-width: 480px){
		.mcnCaptionLeftContentOuter .mcnTextContent,.mcnCaptionRightContentOuter .mcnTextContent{
			padding-top:9px !important;
		}

}	@media only screen and (max-width: 480px){
		.mcnImageCardTopImageContent,.mcnCaptionBottomContent:last-child .mcnCaptionBottomImageContent,.mcnCaptionBlockInner .mcnCaptionTopContent:last-child .mcnTextContent{
			padding-top:18px !important;
		}

}	@media only screen and (max-width: 480px){
		.mcnImageCardBottomImageContent{
			padding-bottom:9px !important;
		}

}	@media only screen and (max-width: 480px){
		.mcnImageGroupBlockInner{
			padding-top:0 !important;
			padding-bottom:0 !important;
		}

}	@media only screen and (max-width: 480px){
		.mcnImageGroupBlockOuter{
			padding-top:9px !important;
			padding-bottom:9px !important;
		}

}	@media only screen and (max-width: 480px){
		.mcnTextContent,.mcnBoxedTextContentColumn{
			padding-right:18px !important;
			padding-left:18px !important;
		}

}	@media only screen and (max-width: 480px){
		.mcnImageCardLeftImageContent,.mcnImageCardRightImageContent{
			padding-right:18px !important;
			padding-bottom:0 !important;
			padding-left:18px !important;
		}

}	@media only screen and (max-width: 480px){
		.mcpreview-image-uploader{
			display:none !important;
			width:100% !important;
		}

}	@media only screen and (max-width: 480px){
	/*
	@tab Mobile Styles
	@section Heading 1
	@tip Make the first-level headings larger in size for better readability on small screens.
	*/
		h1{
			/*@editable*/font-size:22px !important;
			/*@editable*/line-height:125% !important;
		}

}	@media only screen and (max-width: 480px){
	/*
	@tab Mobile Styles
	@section Heading 2
	@tip Make the second-level headings larger in size for better readability on small screens.
	*/
		h2{
			/*@editable*/font-size:20px !important;
			/*@editable*/line-height:125% !important;
		}

}	@media only screen and (max-width: 480px){
	/*
	@tab Mobile Styles
	@section Heading 3
	@tip Make the third-level headings larger in size for better readability on small screens.
	*/
		h3{
			/*@editable*/font-size:18px !important;
			/*@editable*/line-height:125% !important;
		}

}	@media only screen and (max-width: 480px){
	/*
	@tab Mobile Styles
	@section Heading 4
	@tip Make the fourth-level headings larger in size for better readability on small screens.
	*/
		h4{
			/*@editable*/font-size:16px !important;
			/*@editable*/line-height:150% !important;
		}

}	@media only screen and (max-width: 480px){
	/*
	@tab Mobile Styles
	@section Boxed Text
	@tip Make the boxed text larger in size for better readability on small screens. We recommend a font size of at least 16px.
	*/
		table.mcnBoxedTextContentContainer td.mcnTextContent,td.mcnBoxedTextContentContainer td.mcnTextContent p{
			/*@editable*/font-size:14px !important;
			/*@editable*/line-height:150% !important;
		}

}	@media only screen and (max-width: 480px){
	/*
	@tab Mobile Styles
	@section Header Text
	@tip Make the header text larger in size for better readability on small screens.
	*/
		td#templateHeader td.mcnTextContent,td#templateHeader td.mcnTextContent p{
			/*@editable*/font-size:16px !important;
			/*@editable*/line-height:150% !important;
		}

}	@media only screen and (max-width: 480px){
	/*
	@tab Mobile Styles
	@section Body Text
	@tip Make the body text larger in size for better readability on small screens. We recommend a font size of at least 16px.
	*/
		td#templateBody td.mcnTextContent,td#templateBody td.mcnTextContent p{
			/*@editable*/font-size:16px !important;
			/*@editable*/line-height:150% !important;
		}

}	@media only screen and (max-width: 480px){
	/*
	@tab Mobile Styles
	@section Footer Text
	@tip Make the footer content text larger in size for better readability on small screens.
	*/
		td#templateFooter td.mcnTextContent,td#templateFooter td.mcnTextContent p{
			/*@editable*/font-size:14px !important;
			/*@editable*/line-height:150% !important;
		}

}</style></head>
    <body>
        <!--[if !gte mso 9]><!----><span class="mcnPreviewText" style="display:none; font-size:0px; line-height:0px; max-height:0px; max-width:0px; opacity:0; overflow:hidden; visibility:hidden; mso-hide:all;">Tu Cantón - </span><!--<![endif]-->
        <!--*|END:IF|*-->
        <center>
            <table align="center" border="0" cellpadding="0" cellspacing="0" height="100%" width="100%" id="bodyTable">
                <tr>
                    <td align="left" valign="top" id="bodyCell">
                        <!-- BEGIN TEMPLATE // -->
                        <!--[if (gte mso 9)|(IE)]>
                        <table align="center" border="0" cellspacing="0" cellpadding="0" width="600" style="width:600px;">
                        <tr>
                        <td align="center" valign="top" width="600" style="width:600px;">
                        <![endif]-->
                        <table border="0" cellpadding="0" cellspacing="0" width="100%" class="templateContainer">
                            <tr>
                                <td valign="top" id="templateHeader"></td>
                            </tr>
                            <tr>
                                <td valign="top" id="templateBody"><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnImageBlock" style="min-width:100%;">
    <tbody class="mcnImageBlockOuter">
            <tr>
                <td valign="top" style="padding:0px" class="mcnImageBlockInner">
                    <table align="left" width="100%" border="0" cellpadding="0" cellspacing="0" class="mcnImageContentContainer" style="min-width:100%;">
                        <tbody><tr>
                            <td class="mcnImageContent" valign="top" style="padding-right: 0px; padding-left: 0px; padding-top: 0; padding-bottom: 0; text-align:center;">


                                        <img src="http://webservicesapp.jc9nhvmspb.us-east-1.elasticbeanstalk.com/api/pixels/localImages/download/tucanton_logo_template.png/{{id}}/{{campaignId}}/{{segmentId}}/{{experimentId}}" width="200" style="max-width:200px; padding-bottom: 0; display: inline !important; vertical-align: bottom;" class="mcnImage" alt="Tu Cantón">


                            </td>
                        </tr>
                    </tbody></table>
                </td>
            </tr>
    </tbody>
</table></td>
                            </tr>
                            <tr>
                                <td valign="top" id="templateFooter"><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnTextBlock" style="min-width:100%;">
    <tbody class="mcnTextBlockOuter">
        <tr>
            <td valign="top" class="mcnTextBlockInner" style="padding-top:9px;">
              	<!--[if mso]>
				<table align="left" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
				<tr>
				<![endif]-->

				<!--[if mso]>
				<td valign="top" width="600" style="width:600px;">
				<![endif]-->
        <br>
                <table align="left" border="0" cellpadding="0" cellspacing="0" style="max-width:100%; min-width:100%;" width="100%" class="mcnTextContentContainer">
                    <tbody><tr>

                        <td valign="top" class="mcnTextContent" style="padding: 0px 18px 9px; font-family: Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-style: normal; font-weight: normal; line-height: 100%; text-align: left;">

                            Hola {{nombre}}.<br>
<br>
El primer paso para estrenar casa es que revisemos tu crédito <strong>Infonavit o Fovissste</strong> para poder recomendarte las mejores opciones de vivienda.<br>
<br>
Si quieres que chequemos tu crédito, es necesario que <strong>actualices tus datos </strong>haciendo click en el siguiente botón:
                        </td>
                    </tr>
                </tbody></table>
				<!--[if mso]>
				</td>
				<![endif]-->

				<!--[if mso]>
				</tr>
				</table>
				<![endif]-->
            </td>
        </tr>
    </tbody>
</table><br><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnButtonBlock" style="min-width:100%;">
    <tbody class="mcnButtonBlockOuter">
        <tr>
            <td style="padding-top:0; padding-right:18px; padding-bottom:18px; padding-left:18px;" valign="top" align="center" class="mcnButtonBlockInner">
                <table border="0" cellpadding="0" cellspacing="0" class="mcnButtonContentContainer" style="border-collapse: separate !important;border: 1px none;border-radius: 19px;background-color: #F1AA12;">
                    <tbody>
                        <tr>
                            <td align="center" valign="middle" class="mcnButtonContent" style="font-family: Arial; font-size: 14px; padding: 15px;">
                                <a class="mcnButton " title="ACTUALIZA TUS DATOS" href="https://www.tucanton.com/actualizardatos/interesado/{{id}}/{{campaignId}}/{{segmentId}}/{{experimentId}}" target="_blank" style="font-weight: bold;letter-spacing: normal;line-height: 100%;text-align: center;text-decoration: none;color: #FFFFFF;">ACTUALIZA TUS DATOS</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
</table><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnTextBlock" style="min-width:100%;">
    <tbody class="mcnTextBlockOuter">
        <tr>
            <td valign="top" class="mcnTextBlockInner" style="padding-top:9px;">
              	<!--[if mso]>
				<table align="left" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
				<tr>
				<![endif]-->

				<!--[if mso]>
				<td valign="top" width="600" style="width:600px;">
				<![endif]-->
                <table align="left" border="0" cellpadding="0" cellspacing="0" style="max-width:100%; min-width:100%;" width="100%" class="mcnTextContentContainer">
                    <tbody><tr>

                        <td valign="top" class="mcnTextContent" style="padding: 0px 18px 9px; font-family: Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-style: normal; font-weight: normal; text-align: left;">

                            Sabemos lo pesado que es investigar de créditos, buscar casas por todos lados y hacer el papeleo para poder tener casa nueva. En Tu Cantón te ofrecemos un servicio completo y gratuito que te ayudará a tener las llaves de tu casa mucho antes de lo que te imaginas.
                        </td>
                    </tr>
                </tbody></table>
				<!--[if mso]>
				</td>
				<![endif]-->

				<!--[if mso]>
				</tr>
				</table>
				<![endif]-->
            </td>
        </tr>
    </tbody>
</table><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnTextBlock" style="min-width:100%;">
    <tbody class="mcnTextBlockOuter">
        <tr>
            <td valign="top" class="mcnTextBlockInner" style="padding-top:9px;">
              	<!--[if mso]>
				<table align="left" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
				<tr>
				<![endif]-->

				<!--[if mso]>
				<td valign="top" width="600" style="width:600px;">
				<![endif]-->
                <table align="left" border="0" cellpadding="0" cellspacing="0" style="max-width:100%; min-width:100%;" width="100%" class="mcnTextContentContainer">
                    <tbody><tr>

                        <td valign="top" class="mcnTextContent" style="padding: 0px 18px 9px; font-family: Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-style: normal; font-weight: normal; text-align: center;">

                            <span style="font-size:23px; text-align:center;">Lo mejor de la semana</span>
                        </td>
                    </tr>
                </tbody></table>
				<!--[if mso]>
				</td>
				<![endif]-->

				<!--[if mso]>
				</tr>
				</table>
				<![endif]-->
            </td>
        </tr>
    </tbody>
</table><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnImageGroupBlock">
    <tbody class="mcnImageGroupBlockOuter">
            <tr>
                <td valign="top" style="padding:9px" class="mcnImageGroupBlockInner">
                    <table align="left" width="564" border="0" cellpadding="0" cellspacing="0" class="mcnImageGroupContentContainer">
                            <tbody><tr>
                                <td class="mcnImageGroupContent" valign="top" style="padding-left: 9px; padding-top: 0; padding-bottom: 0;">
                                        <img alt="Tu Canton" src="https://s3.amazonaws.com/bucket-storage-tucanton/casas/mailing/${idCasaUno}.jpg" width="564" style="max-width:766px; padding-bottom: 0;" class="mcnImage">
                                        <p style="text-align:center;">${iCasaUno}</p>
                                        <p style="text-align:center">$${pCasaUno} MXN.</p>
                                </td>
                            </tr>
                        </tbody></table>
                </td>
            </tr>
            <tr>
                <td valign="top" style="padding:9px" class="mcnImageGroupBlockInner">
                    <table align="left" width="564" border="0" cellpadding="0" cellspacing="0" class="mcnImageGroupContentContainer">
                            <tbody><tr>
                                <td class="mcnImageGroupContent" valign="top" style="padding-left: 9px; padding-top: 0; padding-bottom: 0;">
                                    <img alt="Tu Canton" src="https://s3.amazonaws.com/bucket-storage-tucanton/casas/mailing/${idCasaDos}.jpg" width="564" style="max-width:766px; padding-bottom: 0;" class="mcnImage">
                                    <p style="text-align:center;">${iCasaDos}</p>
                                    <p style="text-align:center">$${pCasaDos} MXN.</p>
                                </td>
                            </tr>
                        </tbody></table>
                </td>
            </tr>
            <tr>
                <td valign="top" style="padding:9px" class="mcnImageGroupBlockInner">

                    <table align="left" width="564" border="0" cellpadding="0" cellspacing="0" class="mcnImageGroupContentContainer">
                            <tbody><tr>
                                <td class="mcnImageGroupContent" valign="top" style="padding-left: 9px; padding-top: 0; padding-bottom: 0;">
                                        <img alt="Tu Canton" src="https://s3.amazonaws.com/bucket-storage-tucanton/casas/mailing/${idCasaTres}.jpg" width="564" style="max-width:766px; padding-bottom: 0;" class="mcnImage">
                                        <p style="text-align:center;">${iCasaTres}</p>
                                        <p style="text-align:center">$${pCasaTres} MXN.</p>
                                </td>
                            </tr>
                        </tbody></table>

                </td>
            </tr>

    </tbody>
</table><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnTextBlock" style="min-width:100%;">
    <tbody class="mcnTextBlockOuter">
        <tr>
            <td valign="top" class="mcnTextBlockInner" style="padding-top:9px;">
              	<!--[if mso]>
				<table align="left" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
				<tr>
				<![endif]-->

				<!--[if mso]>
				<td valign="top" width="600" style="width:600px;">
				<![endif]-->
                <table align="left" border="0" cellpadding="0" cellspacing="0" style="max-width:100%; min-width:100%;" width="100%" class="mcnTextContentContainer">
                    <tbody><tr>

                        <td valign="top" class="mcnTextContent" style="padding: 0px 18px 9px; font-family: Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-style: normal; font-weight: normal; line-height: 100%; text-align: left;">

                            Saludos,&nbsp;<br>
<br>
El Equipo Tu Cantón
                        </td>
                    </tr>
                </tbody></table>
				<!--[if mso]>
				</td>
				<![endif]-->

				<!--[if mso]>
				</tr>
				</table>
				<![endif]-->
            </td>
        </tr>
        <tr>
          <td>
            <table align="left" border="0" cellpadding="0" cellspacing="0" style="max-width:100%; min-width:100%;" width="100%" class="mcnTextContentContainer">
                <tbody>
                  <tr>
                    <td align="top" class="mcnTextContent" style="padding: 0px 18px 9px; font-family: Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-style: normal; font-weight: normal; text-align: center; font-size:16px;">
                      <h1 style="text-align:center; color:rgb(255,140,0);">Tu Cantón</h1>
                      <p style="text-align:center;">San Luis Potosí #196, Piso 3 <br>  Colonia Roma, CDMX, C.P. 06700 <br> Teléfono : <span style="color:rgb(255,140,0);">55-40-40-73-00</span> <br> Email : <span style="color:rgb(255,140,0);">info@tucanton.com</span></p>
                    </td>
                  </tr>
                </tbody>
            </table>
          </td>
        </tr>
        <tr>
          <td>
            <table align="left" border="0" cellpadding="0" cellspacing="0" style="max-width:100%; min-width:100%;" width="100%" class="mcnTextContentContainer">
                <tbody>
                  <tr>
                  <td align="top" class="mcnTextContent" style="padding: 0px 18px 9px; font-family: Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-style: normal; font-weight: normal; text-align: center; font-size:16px;">
                      <a href="http://mailing.tucanton.com/l/Dc0892u9d95hFvIuP763dfLV9A/PwJv2e0763t0lioktPtUJtHw/no24VNxnl976389201LUewCh6A"><img src="https://www.tucanton.com/img/fb_logo.png" alt=""></a>
                  </td>
                  <td align="top" class="mcnTextContent" style="padding: 0px 18px 9px; font-family: Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-style: normal; font-weight: normal; text-align: center; font-size:16px;">
                      <a href="http://mailing.tucanton.com/l/Dc0892u9d95hFvIuP763dfLV9A/763hDVjUgQKFETMBIeuA2w9g/no24VNxnl976389201LUewCh6A"><img src="https://www.tucanton.com/img/twitter_logo.png" alt=""></a>
                  </td>
                  <td align="top" class="mcnTextContent" style="padding: 0px 18px 9px; font-family: Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-style: normal; font-weight: normal; text-align: center; font-size:16px;">
                      <a href="http://mailing.tucanton.com/l/Dc0892u9d95hFvIuP763dfLV9A/pv8JYmWHtei9IOOgqnYM1g/no24VNxnl976389201LUewCh6A"><img src="https://www.tucanton.com/img/google_logo.png" alt=""></a>
                  </td>
                  </tr>
                </tbody>
            </table>
          </td>
        </tr>
        <tr>
          <td>
            <table align="left" border="0" cellpadding="0" cellspacing="0" style="max-width:100%; min-width:100%;" width="100%" class="mcnTextContentContainer">
                <tbody>
                  <tr>
                  <td align="top" class="mcnTextContent" style="padding: 0px 18px 9px; font-family: Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-style: normal; font-weight: normal; text-align: center; font-size:18px;">
                    <p style="text-align:center; font-size:14px;">Todos los derechos reservados Tu Cantón 2018</p>
                    <br>
                    <p style="text-align:center; color: blue;"><a href="https://tucanton.com/mailing/unsubscribe/{{id}}/{{campaignId}}/{{segmentId}}/{{experimentId}}" style="text-color:red;">No deseo recibir correos.</a></p>
                  </td>
                  </tr>
                </tbody>
            </table>
          </td>
        </tr>
        <tr>
          <td>
            <table align="left" border="0" cellpadding="0" cellspacing="0" style="max-width:100%; min-width:100%;" width="100%" class="mcnTextContentContainer">
                <tbody><tr>
                    <td valign="top" class="mcnTextContent" style="padding: 0px 18px 9px; font-family: Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-style: normal; font-weight: normal; text-align: left; font-size:10px;">
                      * Tu Cantón se reserva el derecho de revisar, modificar y/o eliminar en cualquier momento, sin previo aviso, de manera total o parcial, por iniciativa propia o a petición de tercero, los contenidos transmitidos, difundidos o puestos a disposición en el sitio web y a impedir su transmisión, difusión o puesta a disposición en caso de que, a su juicio, resulten contrarios a cualquier normatividad aplicable. Asimismo, los precios, descripciones y detalles de los inmuebles ofrecidos se encuentran sujetos a cambio y sin previo aviso. En el entendido que, si Tu Cantón identifica un error en la descripción, imagen, disponibilidad o el precio de cualquiera de las publicaciones, lo pondrá de inmediato en conocimiento del Usuario y corregirá la publicación del producto en el sitio web. El Usuario tendrá la opción de reconfirmar su pedido al precio correcto o cancelarlo.
                    </td>
                </tr>
            </tbody></table>
          </td>
        </tr>
    </tbody>
</table></td>
                            </tr>
                        </table>
                        <!--[if (gte mso 9)|(IE)]>
                        </td>
                        </tr>
                        </table>
                        <![endif]-->
                        <!-- // END TEMPLATE -->
                    </td>
                </tr>
            </table>
        </center>
    </body>
</html>
`
$('#template').empty();

$('#template').append(`<textarea class="noMostrar" id="template1">${template}</textarea>`);
  var gT = document.getElementById('template1');
  gT.select();
  document.execCommand("copy");
  var toastHTML = '<span>Template copiado</span>';
  M.toast({html: toastHTML});
}
