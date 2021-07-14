var sInvalidChars
sInvalidChars="1234567890";
var iTotalChecked=0;
function checkNumericVals(objV,  msg)
{
	for(var i=0;i<sInvalidChars.length;i++)
	{
		if(objV.value.indexOf(sInvalidChars.charAt(i))!=-1)
		{
			alert(msg);
			objV.focus();
			return false;
		}
	}
	return true;
}
function objChecked(obj)
{
	if(obj.checked)
		iTotalChecked = iTotalChecked + 1
	else
		iTotalChecked = iTotalChecked - 1
 }
function fnSearch(iID)
{
	document.forms[0].HID_SearchID.value=iID;
	document.forms[0].action="../Users/Search.asp"
	document.forms[0].submit();
}
function fn_ValidateZipPhone(obj, iLen, sMsg)
{
	if(obj.value.length<iLen)
	{
		alert(sMsg);
		obj.select();
		obj.focus();
		return false;
	}
	return true;
}

function CheckConfirmPassword(fldPass,fldConPass,minChars)
{
	//created on: 30th Jan 2003
	//Programmer: Anita Mourya
	//Purpose	: This function is used to check that Password contains minimum characters and confirm Password matches the password. 
	//Arguments : password field name , confirm password field name, minimum characters to check.


		if(fldPass.value.length == 0)
		{
			alert("Please enter your password");
			fldPass.focus();
			fldPass.select();
			return false;
		}
		h = fldPass.value.length;
		x = fldPass.value.value;

			for( i=0;i<h;i++)
			{
			 
				if (  h < minChars )
				{
								alert(" Password can't be less than " + minChars + " characters");
								fldPass.focus();
								fldPass.select();
								return false;
				}


			}
		//=============================


		if(fldConPass.value.length == 0)
		{
			alert("Please re-enter your password");
			fldConPass.focus();
			fldConPass.select();
			return false;
		}
	
//	alert(fldPass.value);	
	//	alert(fldConPass.value);
		if(fldPass.value != fldConPass.value)
		{
			alert("Please ensure that you have entered the same password twice");
			fldConPass.focus();
			fldConPass.select();
			return false;
		}
	return true;

}


function CheckCharWithinField(fldName, fldAlias, chkChar)
{
	//created on: 30th Jan 2003
	//Programmer: Anita Mourya
	//Purpose	: This function is used to check that username does not contain any spaces. 
	//Arguments : field name object, field alias to be used, character to be checked

		b= fldName.value.length
		x= fldName.value
		
		if (x == "")
		{
			alert ("Please Enter Your " + fldAlias)
			fldName.focus();
			fldName.select();
			return false;
		}

		for( i=0;i<b;i++)
		{
			z = x.substring(i,i+1);
			if(z== chkChar)
			{
				alert("Please enter valid " + fldAlias + " without any '" + chkChar + "' in-between");
				fldName.focus();
				fldName.select();
				return false;
			}
		}
		//------------------------------

return true;
}
function SendtoPopup(obj,objaction,iwidth,iheight)
{
	if(ValidateForm(obj))
	{
		iLeft = parseInt(screen.width)/2-parseInt(iwidth)/2
		iTop = parseInt(screen.height)/2-parseInt(iheight)/2
		obj.target = "s"
		obj.method = "Post"
		obj.action = objaction
		win = 	window.open(objaction, "s", "toolbars=0, menubar=0, noresize, left=" + iLeft + ",top=" + iTop + ", width=" + iwidth + ", height=" + iheight)
		obj.submit(win)
	}
	else
	{
		return false;
	}
	return false;
}

function CheckAll(chk)
{
	//created on : 2 March 2001
	//Programmer : Naveen Sharma
	//Purpose 	: This function is used to check all the checkboxes basedon state of chk checkbox. 
	//Arguments : checkbox object
	for (var i=0;i < document.forms[0].elements.length;i++)
	{
		var e = document.forms[0].elements[i];
		if (e.type == "checkbox")
		{
			e.checked = chk.checked;
		}
	}
}

function fnRemoveSpaces(sFldval)
{
	var sTemp=sFldval;
  var sNewval=sTemp;
  //remove spaces from the front
  for(var i=0;i<sTemp.length;i++)
  {	
		if(sTemp.charAt(i)!=" ")
			break;
		else
			sNewval = sTemp.substring(i+1);
	}
	return sNewval;
}

function fnFixSpace(sFldval)
{
	//created on: 10th May 2002
	//Programmer: Prashant Sharma
	//Purpose	: This function is used to remove spaces. 
	//Arguments : text field object value
	var sTemp=sFldval;
  var sReversedString="";
  var sTemp1;
  
  //remove spaces from the front
  sNewval = fnRemoveSpaces(sTemp);
  
  // reverse n remove spaces from the front
  for(var i=sNewval.length-1;i>=0;i--)
		sReversedString = sReversedString + sNewval.charAt(i);
	sTemp1 = fnRemoveSpaces(sReversedString);
	//reverse again
	sReversedString="";
	for(var i=sTemp1.length-1;i>=0;i--)
		sReversedString = sReversedString + sTemp1.charAt(i);
	sNewval = sReversedString;
	return sNewval;
}

function ValidateEMail(objName)
{
	//created on: 12th May 2002
	//Programmer: Naveen Sharma
	//Purpose	: This function is used to validate email. 
	//Arguments : Email object
		
	var sobjValue;
	var iobjLength;
	
	sobjValue=objName;
	iobjLength=sobjValue.length;
	iFposition=sobjValue.indexOf("@");
	iSposition=sobjValue.indexOf(".");
	iTmp=sobjValue.lastIndexOf(".");	
	iPosition=sobjValue.indexOf(",");
	iPos=sobjValue.indexOf(";");
	
	if (iobjLength!=0)
	{
		if ((iFposition == -1)||(iSposition == -1))
		{
			return false;
		}
		else if(sobjValue.charAt(0) == "@" || sobjValue.charAt(0)==".")
		{
			return false;				
		}
		else if(sobjValue.charAt(iobjLength) == "@" ||
sobjValue.charAt(iobjLength)==".")
		{
			return false;				
		}	
		else if((sobjValue.indexOf("@",(iFposition+1)))!=-1)
		{	
			return false;
		}
		else if ((iobjLength-(iTmp+1)<2)||(iobjLength-(iTmp+1)>3))
		{
			return false;
		}
		else if ((iPosition!=-1) || (iPos!=-1))
		{
			return false;
		}
		else
		{
			return true;
		}		
	}		
}

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_findObj(n, d) { //v4.0
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && document.getElementById) x=document.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

/*--------------------------------------------------------------------------------------
	this sub routine checks for the mandatory fields, their data types and maximum length
	also validates valid email entered or not
	Return : True/False
	Input : objFrm ( form object name)
	Programmer : Naveen Sharma
	Dated : 22-05-2002
	Version : 1.0.0
----------------------------------------------------------------------------------------*/
function ValidateForm(objFrm)
{
	var iConventionPos;
	var sChangedName;
	for( var i =0; i< objFrm.length;i++)
	{
		if(objFrm[i].type=='text' || objFrm[i].type=='textarea' || objFrm[i].type=='select-one' || objFrm[i].type=='select-multiple' || objFrm[i].type=='password')
		{
			if(objFrm[i].type=='text' || objFrm[i].type=='textarea' || objFrm[i].type=='password')
				objFrm[i].value = fnFixSpace(objFrm[i].value);
			
			var objDataTypeHolder = objFrm[i].name.substring(0,3);
			if(objFrm[i].name.substring(0,5)=='TREF_' || objFrm[i].name.substring(0,5)=='TNEF_'  || objFrm[i].name.substring(0,5)=='POKR_')
				objDataTypeHolder = objFrm[i].name.substring(0,5);
			if((objFrm[i].type=='select-one' && objFrm[i].options[objFrm[i].selectedIndex].value=='' && objDataTypeHolder=="TR_"))
			{
				sChangedName = objFrm[i].name.substring(3);
				sChangedName = getFormattedmsg(sChangedName);
				alert("Please select "+ sChangedName +".");
				objFrm[i].focus();
				return false;
				break;
			}

			if(objFrm[i].type=='password' && objFrm[i].value!='' && objFrm[i].value.indexOf(" ")!=-1)
			{
				alert("Spaces are not allowed in password.");
				objFrm[i].select();
				return false;
				break;
			}
			if(objFrm[i].type=='password' && objFrm[i].name=='TR_Confirm_Password' && objFrm[i].value!=objFrm.TR_Password.value)
			{
				alert("Password and confirm password fields are not matching.");
				objFrm[i].select();
				return false;
				break;
			}
			if(objFrm[i].type=='password' && objFrm[i].name=='TR_Confirm_New_Password' && objFrm[i].value!=objFrm.TR_New_Password.value)
			{
				alert("New Password and confirm New password fields are not matching.");
				objFrm[i].select();
				return false;
				break;
			}
			if(objFrm[i].type=='password' && objFrm[i].name=='TO_confirm_new_password' && objFrm[i].value!=objFrm.TO_new_password.value)
			{
				alert("New Password and confirm New password fields are not matching.");
				objFrm[i].select();
				return false;
				break;
			}			
			if((objDataTypeHolder=="UN_" || objDataTypeHolder=="TR_" || objDataTypeHolder=="IR_" || objDataTypeHolder=="MR_"  )&& (objFrm[i].value==''))
			{	
				sChangedName = objFrm[i].name.substring(3);
				sChangedName = getFormattedmsg(sChangedName)

				alert("Please enter "+ sChangedName +".");
				objFrm[i].focus();
				return false;
				break;
			}
			
			if((objDataTypeHolder=="TREF_" || objDataTypeHolder=="POKR_")  && objFrm[i].value=='')
			{
				sChangedName = objFrm[i].name.substring(5);
				sChangedName = getFormattedmsg(sChangedName);
			
				alert("Please enter "+ sChangedName +".");
				objFrm[i].focus();
				objFrm[i].select();
				return false;
				break;
			}						
			if(objFrm[i].name=='TREF_Confirm_email' && objFrm[i].value!=objFrm.TREF_email.value)
			{
				alert("Email and confirm email fields are not matching.");
				objFrm[i].focus();
				objFrm[i].select();
				return false;
				break;
			}	
			if((objDataTypeHolder=="IR_" || objDataTypeHolder=="MR_" )&& (isNaN(objFrm[i].value)))
			{
				sChangedName = objFrm[i].name.substring(3);
				sChangedName = getFormattedmsg(sChangedName)
				alert("Please enter numeric "+ sChangedName +".");
				objFrm[i].focus();
				objFrm[i].select();
				return false;
				break;
			}
			if(objDataTypeHolder=="UN_" && objFrm[i].value!='' && objFrm[i].value.indexOf(" ")!=-1)
			{
				sChangedName = objFrm[i].name.substring(3);
				sChangedName = getFormattedmsg(sChangedName)
				alert("Spaces are not allowed in "+ sChangedName +".");
				objFrm[i].focus();
				objFrm[i].select();
				return false;
				break;
			}			

			if((objDataTypeHolder=="IN_" || objDataTypeHolder=="MN_" )&& (isNaN(objFrm[i].value) && objFrm[i].value!='' ))
			{
				sChangedName = objFrm[i].name.substring(3);
				sChangedName = getFormattedmsg(sChangedName)
				alert("Please enter numeric "+ sChangedName +".");
				objFrm[i].focus();
				objFrm[i].select();
				return false;
				break;
			}

			if((objDataTypeHolder=="TREF_" || objDataTypeHolder=="TNEF_" || objDataTypeHolder=="POKR_" ) && objFrm[i].value!='' )
			{
			
				if(objDataTypeHolder=="POKR_"){
					var ln=objFrm[i].value.length;
					var postfix=objFrm[i].value.substr(ln-17,17);	
					if(postfix!="wharton.upenn.edu"){
						alert("Please enter valid email.");
						objFrm[i].focus();
						objFrm[i].select();
						return false;
						break;					
					}
				}
								
				if(!ValidateEMail(objFrm[i].value))
				{
					alert("Please enter valid email.");
					objFrm[i].focus();
					objFrm[i].select();
					return false;
					break;
				}
				
			}
			
			//ValidateNumber(objName)
			if((objDataTypeHolder=="NR_"))
			{
				if(!ValidateNumber(objFrm[i].value))
				{
					objFrm[i].focus();
					return false;
					break;
				}
			}			
			if(objDataTypeHolder=="PHR")
			{
				var val=objFrm[i].value;
				if (val!="")
				{
					for(var j=0; j < val.length;j++)
					{
						if((val.charAt(j)!='(')&&(val.charAt(j)!=')')&&(val.charAt(j)!=' ')&&(val.charAt(j)!="-")&& !((val.charAt(j)>=0)&&(val.charAt(j)<=9)))
						{
							alert("Please enter valid Phone Number");
							objFrm[i].focus();
							objFrm[i].select();
							return false;
							break;
						}
					}
				}
				else
				{
					alert("Please Enter Phone Number");
					objFrm[i].focus();
					objFrm[i].select();
					return false;
					break;
				}
			}
			//ValidateNumber(objName)
			if((objDataTypeHolder=="NR_"))
			{
				if(!ValidateNumber(objFrm[i].value))
				{
					objFrm[i].focus();
					return false;
					break;
				}
				if(parseFloat(objFrm[i].value)<=0)
				{
					objFrm[i].focus();	
					alert('Price should be greater then 0');
					return false;
				}
			}
			if(objDataTypeHolder=="PHN")
			{
				var val=objFrm[i].value;
				if (val!="")
				{
					for(var j=0; j < val.length;j++)
					{
						if((val.charAt(j)!='(')&&(val.charAt(j)!=')')&&(val.charAt(j)!=' ')&&(val.charAt(j)!="-")&& !((val.charAt(j)>=0)&&(val.charAt(j)<=9)))
						{
							alert("Please enter valid Phone Number");
							objFrm[i].focus();
							objFrm[i].select();
							return false;
							break;
						}
					}
				}				
			}
		}
		
		var objDataTypeHolder = objFrm[i].name.substring(0,3);
		sChangedName = objFrm[i].name.substring(3);
		sChangedName = getFormattedmsg(sChangedName);

		if(objFrm[i].type=='checkbox' && objDataTypeHolder=='CH_' && objFrm[i].checked==false){
			alert("You must check "+sChangedName);
			return false;
		}		

		if(objFrm[i].type=='file' && objDataTypeHolder=='FL_' && objFrm[i].value==''){
			alert("Please enter "+sChangedName);
			objFrm[i].focus();
			return false;
		}
		/*
		images extension list
		JPEG,JPG,EXIF,IPTC,TIFF,TIF,BMP,GIF,PNG,PIC,CEL,CUT,PAL,EPS,ICO,PCD,PCX,PCC,SCR,PSP,PSD,PDD,PBM,PPM,
		PGM,RLA,RPF,QBMP,BW,RGB,RGBA,SGI,TGA,VST,ICB,VDA,WIN,WMF,EMF,WBMP
		*/
		
		if(objFrm[i].type=='file' && objDataTypeHolder=='FL_' && objFrm[i].value!=''){
				var len=objFrm[i].value.length;
				var ext=objFrm[i].value.substr(len-4,4);
				ext=ext.toLowerCase();
				if(len>0 && ext!='jpeg' && ext!='.jpg' && ext!='exif' && ext!='iptc' && ext!='tiff' && ext!='.tif' && ext!='.bmp' && ext!='.gif' && ext!='.png' && ext!='.pic' && ext!='.cel' && ext!='.cut' && ext!='.pal' && ext!='.eps' && ext!='.ico' && ext!='.swf' && ext!='.SWF'){							
					alert("Please browse \n jpeg OR jpg OR exif OR iptc OR tiff OR tif OR bmp OR gif OR png OR pic OR cel OR cut OR pal OR eps OR ico \n type only");
					objFrm[i].focus();
					return false;
				} 		
		}		
		if(objFrm[i].type=='file' && objDataTypeHolder=='FE_' && objFrm[i].value!=''){
				var len=objFrm[i].value.length;
				var ext=objFrm[i].value.substr(len-4,4);
				ext=ext.toLowerCase();
				
			//	if(len>0 && ext!='jpeg' && ext!='.jpg' && ext!='exif' && ext!='iptc' && ext!='tiff' && ext!='.tif' && ext!='.bmp' && ext!='.gif' && ext!='.png' && ext!='.pic' && ext!='.cel' && ext!='.cut' && ext!='.pal' && ext!='.eps' && ext!='.ico' ){							
			//	alert("Please browse \n jpeg OR jpg OR exif OR iptc OR tiff OR tif OR bmp OR gif OR png OR pic OR cel OR cut OR pal OR eps OR ico \n type only");
										
				if(len>0 && ext!='jpeg' && ext!='.jpg' && ext!='.gif' && ext!='.png' ){							
					alert("Please browse jpeg OR jpg OR gif OR png type only");
					objFrm[i].focus();
					return false;
				} 		
		}
// validation for video clips---------------------------------> begin  wmv mov		

		if(objFrm[i].type=='file' && objDataTypeHolder=='VC_' && objFrm[i].value==''){
			alert("Please enter "+sChangedName);
			objFrm[i].focus();
			return false;
		}
		
		if(objFrm[i].type=='file' && objDataTypeHolder=='VC_' && objFrm[i].value!=''){
				var len=objFrm[i].value.length;
				var ext=objFrm[i].value.substr(len-4,4);
				ext=ext.toLowerCase();
				if(len>0 && ext!='.mov' && ext!='.wmv' ){							
					alert("Please browse mov OR wmv type only");
					objFrm[i].focus();
					return false;
				} 		
		}		
		if(objFrm[i].type=='file' && objDataTypeHolder=='VE_' && objFrm[i].value!=''){
				var len=objFrm[i].value.length;
				var ext=objFrm[i].value.substr(len-4,4);
				ext=ext.toLowerCase();										
				if(len>0 && ext!='.mov' && ext!='.wmv' ){							
					alert("Please browse mov OR wmv type only");
					objFrm[i].focus();
					return false;
				} 		
		}
// validation for video clips---------------------------------> end		
				
	}
	return true;
}

function seltab(showtb){
		var optarr= new Array('Select Category','General','Meta Information','Product Description','Product Photos','Freight Charges','Tier Prices');
		for(i=1; i<=7; i++){			
			if(showtb==i){
				document.getElementById('hdtxt').innerHTML='<strong>'+optarr[i-1]+'</strong>';
				eval("document.getElementById('opt"+i+"').style.background='#FFFFFF'");
				eval("document.getElementById('opt"+i+"').style.fontWeight='bold'");				
				eval("document.getElementById('tb"+i+"').style.display=''");
			}else{
				eval("document.getElementById('opt"+i+"').style.background='#E6F1F7'");
				eval("document.getElementById('opt"+i+"').style.fontWeight=''");
				eval("document.getElementById('tb"+i+"').style.display='none'");
			}
		}
		
	}

function ValidateProductForm(objFrm)
{
	var iConventionPos;
	var sChangedName;
	for( var i =0; i< objFrm.length;i++)
	{
	
	
		if(objFrm[i].type=='text' || objFrm[i].type=='textarea' || objFrm[i].type=='select-one' || objFrm[i].type=='select-multiple' || objFrm[i].type=='password')
		{
			if(objFrm[i].type=='text' || objFrm[i].type=='textarea' || objFrm[i].type=='password')
				objFrm[i].value = fnFixSpace(objFrm[i].value);
			
			var objDataTypeHolder = objFrm[i].name.substring(0,3);
			
			if((objFrm[i].type=='select-one' && objDataTypeHolder=="TR_") && objFrm[i].options[objFrm[i].selectedIndex].value=='' )
			{
				sChangedName = objFrm[i].name.substring(3);
				sChangedName = getFormattedmsg(sChangedName);
				alert("Please select "+ sChangedName +".");
				objFrm[i].focus();
				return false;
				break;
			}
			if((objFrm[i].type=='select-one' && objDataTypeHolder=="CT_") && objFrm[i].options[objFrm[i].selectedIndex].value=='' )
			{
				sChangedName = objFrm[i].name.substring(3);
				sChangedName = getFormattedmsg(sChangedName);
				alert("Please select "+ sChangedName +".");
				seltab(1);
				objFrm[i].focus();
				return false;
				break;
			}

			if(objFrm[i].type=='password' && objFrm[i].value!='' && objFrm[i].value.indexOf(" ")!=-1)
			{
				alert("Spaces are not allowed in password.");
				objFrm[i].select();
				return false;
				break;
			}
			
			if(objFrm[i].type=='password' && objFrm[i].name=='TR_Confirm_Password' && objFrm[i].value!=objFrm.TR_Password.value)
			{
				alert("Password and confirm password fields are not matching.");
				objFrm[i].select();
				return false;
				break;
			}
						
						if(objFrm[i].type=='password' && objFrm[i].name=='TR_Confirm_New_Password' && objFrm[i].value!=objFrm.TR_New_Password.value)
						{
							alert("New Password and confirm New password fields are not matching.");
							objFrm[i].select();
							return false;
							break;
						}
									
						if(objFrm[i].type=='password' && objFrm[i].name=='TO_confirm_new_password' && objFrm[i].value!=objFrm.TO_new_password.value)
						{
							alert("New Password and confirm New password fields are not matching.");
							objFrm[i].select();
							return false;
							break;
						}
									
						if((objDataTypeHolder=="UN_" || objDataTypeHolder=="TR_" || objDataTypeHolder=="IR_" || objDataTypeHolder=="MR_"  )&& (objFrm[i].value==''))
						{	
							sChangedName = objFrm[i].name.substring(3);
							sChangedName = getFormattedmsg(sChangedName)
			
							alert("Please enter "+ sChangedName +".");
							objFrm[i].focus();
							return false;
							break;
						}
			//T2 for text 
			// N2 for numeric
						if((objDataTypeHolder=="T2_" || objDataTypeHolder=="N2_" )&& (objFrm[i].value==''))
						{	
							sChangedName = objFrm[i].name.substring(3);
							sChangedName = getFormattedmsg(sChangedName)
			
							alert("Please enter "+ sChangedName +".");
							seltab(2);
							objFrm[i].focus();
							return false;
							break;
						}
			
						if((objDataTypeHolder=="TREF_" || objDataTypeHolder=="POKR_")  && objFrm[i].value=='')
						{
							sChangedName = objFrm[i].name.substring(5);
							sChangedName = getFormattedmsg(sChangedName);
						
							alert("Please enter "+ sChangedName +".");
							objFrm[i].focus();
							objFrm[i].select();
							return false;
							break;
						}
			
									
						if(objFrm[i].name=='TREF_Confirm_email' && objFrm[i].value!=objFrm.TREF_email.value)
						{
							alert("Email and confirm email fields are not matching.");
							objFrm[i].focus();
							objFrm[i].select();
							return false;
							break;
						}	
			
			
						if((objDataTypeHolder=="N2_" )&& (isNaN(objFrm[i].value)))
						{
							sChangedName = objFrm[i].name.substring(3);
							sChangedName = getFormattedmsg(sChangedName)
							alert("Please enter numeric "+ sChangedName +".");
							seltab(2);
							objFrm[i].focus();
							objFrm[i].select();
							return false;
							break;
						}
						
						if((objDataTypeHolder=="IR_" || objDataTypeHolder=="MR_" )&& (isNaN(objFrm[i].value)))
						{
							sChangedName = objFrm[i].name.substring(3);
							sChangedName = getFormattedmsg(sChangedName)
							alert("Please enter numeric "+ sChangedName +".");
							objFrm[i].focus();
							objFrm[i].select();
							return false;
							break;
						}
						
						
						if(objDataTypeHolder=="UN_" && objFrm[i].value!='' && objFrm[i].value.indexOf(" ")!=-1)
						{
							sChangedName = objFrm[i].name.substring(3);
							sChangedName = getFormattedmsg(sChangedName)
							alert("Spaces are not allowed in "+ sChangedName +".");
							objFrm[i].focus();
							objFrm[i].select();
							return false;
							break;
						}			

						if((objDataTypeHolder=="IN_" || objDataTypeHolder=="MN_" )&& (isNaN(objFrm[i].value) && objFrm[i].value!='' ))
						{
							sChangedName = objFrm[i].name.substring(3);
							sChangedName = getFormattedmsg(sChangedName)
							alert("Please enter numeric "+ sChangedName +".");
							objFrm[i].focus();
							objFrm[i].select();
							return false;
							break;
						}

						if((objDataTypeHolder=="TREF_" || objDataTypeHolder=="TNEF_" || objDataTypeHolder=="POKR_" ) && objFrm[i].value!='' )
						{
						
							if(objDataTypeHolder=="POKR_"){
								var ln=objFrm[i].value.length;
								var postfix=objFrm[i].value.substr(ln-17,17);	
								if(postfix!="wharton.upenn.edu"){
									alert("Please enter valid email.");
									objFrm[i].focus();
									objFrm[i].select();
									return false;
									break;					
								}
							}
											
							if(!ValidateEMail(objFrm[i].value))
							{
								alert("Please enter valid email.");
								objFrm[i].focus();
								objFrm[i].select();
								return false;
								break;
							}
							
						}
			
					//ValidateNumber(objName)
					if((objDataTypeHolder=="NR_"))
					{
						if(!ValidateNumber(objFrm[i].value))
						{
							objFrm[i].focus();
							return false;
							break;
						}
					}
								
					if(objDataTypeHolder=="PHR")
					{
						var val=objFrm[i].value;
						if (val!="")
						{
							for(var j=0; j < val.length;j++)
							{
								if((val.charAt(j)!='(')&&(val.charAt(j)!=')')&&(val.charAt(j)!=' ')&&(val.charAt(j)!="-")&& !((val.charAt(j)>=0)&&(val.charAt(j)<=9)))
								{
									alert("Please enter valid Phone Number");
									objFrm[i].focus();
									objFrm[i].select();
									return false;
									break;
								}
							}
						}else{
							alert("Please Enter Phone Number");
							objFrm[i].focus();
							objFrm[i].select();
							return false;
							break;
						}
					}
					
			//ValidateNumber(objName)
					if((objDataTypeHolder=="NR_"))
					{
						if(!ValidateNumber(objFrm[i].value))
						{
							objFrm[i].focus();
							return false;
							break;
						}
						if(parseFloat(objFrm[i].value)<=0)
						{
							objFrm[i].focus();	
							alert('Price should be greater then 0');
							return false;
						}
					}
					
					if((objDataTypeHolder=="P2_"))
					{
						
						
						if(!objFrm.hideprice.checked && !ValidateNumber(objFrm[i].value))
						{
														
							objFrm[i].focus();
							return false;
							break;
						}
						
						if(objFrm[i].value && objFrm[i].value.indexOf("$")!=-1){
							alert("Please don't use $ sign in price");
							
							objFrm[i].focus();
							return false;
							break;
						}
						
						if(!objFrm.hideprice.checked && parseFloat(objFrm[i].value)<=0)
						{
							
							objFrm[i].focus();	
							alert('Price should be greater then 0');
							return false;
						}
						
					}			
			
		}
		
		var objDataTypeHolder = objFrm[i].name.substring(0,3);
		sChangedName = objFrm[i].name.substring(3);
		sChangedName = getFormattedmsg(sChangedName);

		if(objFrm[i].type=='checkbox' && objDataTypeHolder=='CH_' && objFrm[i].checked==false){
			alert("You must check "+sChangedName);
			return false;
		}		

		if(objFrm[i].type=='file' && objDataTypeHolder=='FL_' && objFrm[i].value==''){
			alert("Please enter "+sChangedName);
			objFrm[i].focus();
			return false;
		}
		/*
		images extension list
		JPEG,JPG,EXIF,IPTC,TIFF,TIF,BMP,GIF,PNG,PIC,CEL,CUT,PAL,EPS,ICO,PCD,PCX,PCC,SCR,PSP,PSD,PDD,PBM,PPM,
		PGM,RLA,RPF,QBMP,BW,RGB,RGBA,SGI,TGA,VST,ICB,VDA,WIN,WMF,EMF,WBMP
		*/
		
		if(objFrm[i].type=='file' && objDataTypeHolder=='FL_' && objFrm[i].value!=''){
				var len=objFrm[i].value.length;
				var ext=objFrm[i].value.substr(len-4,4);
				ext=ext.toLowerCase();
				if(len>0 && ext!='jpeg' && ext!='.jpg' && ext!='exif' && ext!='iptc' && ext!='tiff' && ext!='.tif' && ext!='.bmp' && ext!='.gif' && ext!='.png' && ext!='.pic' && ext!='.cel' && ext!='.cut' && ext!='.pal' && ext!='.eps' && ext!='.ico' ){							
					alert("Please browse \n jpeg OR jpg OR exif OR iptc OR tiff OR tif OR bmp OR gif OR png OR pic OR cel OR cut OR pal OR eps OR ico \n type only");
					objFrm[i].focus();
					return false;
				} 		
		}		
		if(objFrm[i].type=='file' && objDataTypeHolder=='F2_'){
				if(objFrm[i].value!='')
				{
					var len=objFrm[i].value.length;
					var ext=objFrm[i].value.substr(len-4,4);
					ext=ext.toLowerCase();		
					if(len>0 && ext!='jpeg' && ext!='.jpg' && ext!='.gif' && ext!='.png' ){							
						alert("Please browse jpeg OR jpg OR gif OR png type only");
						seltab(2);
						objFrm[i].focus();
						return false;
					} 	
				}
				else
				{
					alert("Please browse product image jpeg OR jpg OR gif OR png type only");
					seltab(2);
					objFrm[i].focus();
					return false;
				}
		}
		
		if(objFrm[i].type=='file' && objDataTypeHolder=='FE_' && objFrm[i].value!=''){
				var len=objFrm[i].value.length;
				var ext=objFrm[i].value.substr(len-4,4);
				ext=ext.toLowerCase();
				
			//	if(len>0 && ext!='jpeg' && ext!='.jpg' && ext!='exif' && ext!='iptc' && ext!='tiff' && ext!='.tif' && ext!='.bmp' && ext!='.gif' && ext!='.png' && ext!='.pic' && ext!='.cel' && ext!='.cut' && ext!='.pal' && ext!='.eps' && ext!='.ico' ){							
			//	alert("Please browse \n jpeg OR jpg OR exif OR iptc OR tiff OR tif OR bmp OR gif OR png OR pic OR cel OR cut OR pal OR eps OR ico \n type only");
										
				if(len>0 && ext!='jpeg' && ext!='.jpg' && ext!='.gif' && ext!='.png' ){							
					alert("Please browse jpeg OR jpg OR gif OR png type only");
					objFrm[i].focus();
					return false;
				} 		
		}

// validation for video clips---------------------------------> begin  wmv mov		

		if(objFrm[i].type=='file' && objDataTypeHolder=='VC_' && objFrm[i].value==''){
			alert("Please enter "+sChangedName);
			objFrm[i].focus();
			return false;
		}
		
		if(objFrm[i].type=='file' && objDataTypeHolder=='VC_' && objFrm[i].value!=''){
				var len=objFrm[i].value.length;
				var ext=objFrm[i].value.substr(len-4,4);
				ext=ext.toLowerCase();
				if(len>0 && ext!='.mov' && ext!='.wmv' ){							
					alert("Please browse mov OR wmv type only");
					objFrm[i].focus();
					return false;
				} 		
		}		
		if(objFrm[i].type=='file' && objDataTypeHolder=='VE_' && objFrm[i].value!=''){
				var len=objFrm[i].value.length;
				var ext=objFrm[i].value.substr(len-4,4);
				ext=ext.toLowerCase();										
				if(len>0 && ext!='.mov' && ext!='.wmv' ){							
					alert("Please browse mov OR wmv type only");
					objFrm[i].focus();
					return false;
				} 		
		}
		
// validation for video clips---------------------------------> end		
				
	}
	
	return true;
}

function seledittab(showtb){
		var optarr= new Array('Select Category','General','Meta Information','Product Description','Product Photos','Freight Charges','Tier Prices');
		for(i=1; i<=6; i++){			
			if(showtb==i){
				document.getElementById('hdtxt').innerHTML='<strong>'+optarr[i-1]+'</strong>';
				eval("document.getElementById('opt"+i+"').style.background='#FFFFFF'");
				eval("document.getElementById('opt"+i+"').style.fontWeight='bold'");				
				eval("document.getElementById('tb"+i+"').style.display=''");
			}else{
				eval("document.getElementById('opt"+i+"').style.background='#E6F1F7'");
				eval("document.getElementById('opt"+i+"').style.fontWeight=''");
				eval("document.getElementById('tb"+i+"').style.display='none'");
			}
		}		
	}

function ValidateEditProductForm(objFrm)
{
	var iConventionPos;
	var sChangedName;
	for( var i =0; i< objFrm.length;i++)
	{
	
		if(objFrm[i].type=='text' || objFrm[i].type=='textarea' || objFrm[i].type=='select-one' || objFrm[i].type=='select-multiple' || objFrm[i].type=='password')
		{
			if(objFrm[i].type=='text' || objFrm[i].type=='textarea' || objFrm[i].type=='password')
				objFrm[i].value = fnFixSpace(objFrm[i].value);
			
			var objDataTypeHolder = objFrm[i].name.substring(0,3);
			
			if((objFrm[i].type=='select-one' && objFrm[i].options[objFrm[i].selectedIndex].value=='' && objDataTypeHolder=="TR_"))
			{
				sChangedName = objFrm[i].name.substring(3);
				sChangedName = getFormattedmsg(sChangedName);
				alert("Please select "+ sChangedName +".");
				objFrm[i].focus();
				return false;
				break;
			}
			if((objFrm[i].type=='select-one' && objFrm[i].options[objFrm[i].selectedIndex].value=='' && objDataTypeHolder=="CT_"))
			{
				sChangedName = objFrm[i].name.substring(3);
				sChangedName = getFormattedmsg(sChangedName);
				alert("Please select "+ sChangedName +".");
				seledittab(1);
				objFrm[i].focus();
				return false;
				break;
			}

			if(objFrm[i].type=='password' && objFrm[i].value!='' && objFrm[i].value.indexOf(" ")!=-1)
			{
				alert("Spaces are not allowed in password.");
				objFrm[i].select();
				return false;
				break;
			}
			
			if(objFrm[i].type=='password' && objFrm[i].name=='TR_Confirm_Password' && objFrm[i].value!=objFrm.TR_Password.value)
			{
				alert("Password and confirm password fields are not matching.");
				objFrm[i].select();
				return false;
				break;
			}
						
						if(objFrm[i].type=='password' && objFrm[i].name=='TR_Confirm_New_Password' && objFrm[i].value!=objFrm.TR_New_Password.value)
						{
							alert("New Password and confirm New password fields are not matching.");
							objFrm[i].select();
							return false;
							break;
						}
									
						if(objFrm[i].type=='password' && objFrm[i].name=='TO_confirm_new_password' && objFrm[i].value!=objFrm.TO_new_password.value)
						{
							alert("New Password and confirm New password fields are not matching.");
							objFrm[i].select();
							return false;
							break;
						}
									
						if((objDataTypeHolder=="UN_" || objDataTypeHolder=="TR_" || objDataTypeHolder=="IR_" || objDataTypeHolder=="MR_"  )&& (objFrm[i].value==''))
						{	
							sChangedName = objFrm[i].name.substring(3);
							sChangedName = getFormattedmsg(sChangedName)
			
							alert("Please enter "+ sChangedName +".");
							objFrm[i].focus();
							return false;
							break;
						}
			//T2 for text 
			// N2 for numeric
						if((objDataTypeHolder=="T2_" || objDataTypeHolder=="N2_" )&& (objFrm[i].value==''))
						{	
							sChangedName = objFrm[i].name.substring(3);
							sChangedName = getFormattedmsg(sChangedName)
			
							alert("Please enter "+ sChangedName +".");
							seledittab(2);
							objFrm[i].focus();
							return false;
							break;
						}
			
						if((objDataTypeHolder=="TREF_" || objDataTypeHolder=="POKR_")  && objFrm[i].value=='')
						{
							sChangedName = objFrm[i].name.substring(5);
							sChangedName = getFormattedmsg(sChangedName);
						
							alert("Please enter "+ sChangedName +".");
							objFrm[i].focus();
							objFrm[i].select();
							return false;
							break;
						}
			
									
						if(objFrm[i].name=='TREF_Confirm_email' && objFrm[i].value!=objFrm.TREF_email.value)
						{
							alert("Email and confirm email fields are not matching.");
							objFrm[i].focus();
							objFrm[i].select();
							return false;
							break;
						}	
			
			
						if((objDataTypeHolder=="N2_" )&& (isNaN(objFrm[i].value)))
						{
							sChangedName = objFrm[i].name.substring(3);
							sChangedName = getFormattedmsg(sChangedName)
							alert("Please enter numeric "+ sChangedName +".");
							seledittab(2);
							objFrm[i].focus();
							objFrm[i].select();
							return false;
							break;
						}
						
						if((objDataTypeHolder=="IR_" || objDataTypeHolder=="MR_" )&& (isNaN(objFrm[i].value)))
						{
							sChangedName = objFrm[i].name.substring(3);
							sChangedName = getFormattedmsg(sChangedName)
							alert("Please enter numeric "+ sChangedName +".");
							objFrm[i].focus();
							objFrm[i].select();
							return false;
							break;
						}
						
						
						if(objDataTypeHolder=="UN_" && objFrm[i].value!='' && objFrm[i].value.indexOf(" ")!=-1)
						{
							sChangedName = objFrm[i].name.substring(3);
							sChangedName = getFormattedmsg(sChangedName)
							alert("Spaces are not allowed in "+ sChangedName +".");
							objFrm[i].focus();
							objFrm[i].select();
							return false;
							break;
						}			

						if((objDataTypeHolder=="IN_" || objDataTypeHolder=="MN_" )&& (isNaN(objFrm[i].value) && objFrm[i].value!='' ))
						{
							sChangedName = objFrm[i].name.substring(3);
							sChangedName = getFormattedmsg(sChangedName)
							alert("Please enter numeric "+ sChangedName +".");
							objFrm[i].focus();
							objFrm[i].select();
							return false;
							break;
						}

						if((objDataTypeHolder=="TREF_" || objDataTypeHolder=="TNEF_" || objDataTypeHolder=="POKR_" ) && objFrm[i].value!='' )
						{
						
							if(objDataTypeHolder=="POKR_"){
								var ln=objFrm[i].value.length;
								var postfix=objFrm[i].value.substr(ln-17,17);	
								if(postfix!="wharton.upenn.edu"){
									alert("Please enter valid email.");
									objFrm[i].focus();
									objFrm[i].select();
									return false;
									break;					
								}
							}
											
							if(!ValidateEMail(objFrm[i].value))
							{
								alert("Please enter valid email.");
								objFrm[i].focus();
								objFrm[i].select();
								return false;
								break;
							}
							
						}
			
					//ValidateNumber(objName)
					if((objDataTypeHolder=="NR_"))
					{
						if(!ValidateNumber(objFrm[i].value))
						{
							objFrm[i].focus();
							return false;
							break;
						}
					}
								
					if(objDataTypeHolder=="PHR")
					{
						var val=objFrm[i].value;
						if (val!="")
						{
							for(var j=0; j < val.length;j++)
							{
								if((val.charAt(j)!='(')&&(val.charAt(j)!=')')&&(val.charAt(j)!=' ')&&(val.charAt(j)!="-")&& !((val.charAt(j)>=0)&&(val.charAt(j)<=9)))
								{
									alert("Please enter valid Phone Number");
									objFrm[i].focus();
									objFrm[i].select();
									return false;
									break;
								}
							}
						}else{
							alert("Please Enter Phone Number");
							objFrm[i].focus();
							objFrm[i].select();
							return false;
							break;
						}
					}
					
			//ValidateNumber(objName)
					if((objDataTypeHolder=="NR_"))
					{
						if(!ValidateNumber(objFrm[i].value))
						{
							objFrm[i].focus();
							return false;
							break;
						}
						if(parseFloat(objFrm[i].value)<=0)
						{
							objFrm[i].focus();	
							alert('Price should be greater then 0');
							return false;
						}
					}
					
					if((objDataTypeHolder=="P2_"))
					{
						if(!ValidateNumber(objFrm[i].value))
						{
							seledittab(2);
							objFrm[i].focus();
							return false;
							break;
						}
						
						if(objFrm[i].value && objFrm[i].value.indexOf("$")!=-1){
							alert("Please do't use $ sign in price");
							seledittab(2);
							objFrm[i].focus();
							return false;
							break;
						}
						
						if(parseFloat(objFrm[i].value)<=0)
						{
							seledittab(2);
							objFrm[i].focus();	
							alert('Price should be greater then 0');
							return false;
						}
						
					}			
			
		}
		
		var objDataTypeHolder = objFrm[i].name.substring(0,3);
		sChangedName = objFrm[i].name.substring(3);
		sChangedName = getFormattedmsg(sChangedName);

		if(objFrm[i].type=='checkbox' && objDataTypeHolder=='CH_' && objFrm[i].checked==false){
			alert("You must check "+sChangedName);
			return false;
		}		

		if(objFrm[i].type=='file' && objDataTypeHolder=='FL_' && objFrm[i].value==''){
			alert("Please enter "+sChangedName);
			objFrm[i].focus();
			return false;
		}
		/*
		images extension list
		JPEG,JPG,EXIF,IPTC,TIFF,TIF,BMP,GIF,PNG,PIC,CEL,CUT,PAL,EPS,ICO,PCD,PCX,PCC,SCR,PSP,PSD,PDD,PBM,PPM,
		PGM,RLA,RPF,QBMP,BW,RGB,RGBA,SGI,TGA,VST,ICB,VDA,WIN,WMF,EMF,WBMP
		*/
		
		if(objFrm[i].type=='file' && objDataTypeHolder=='FL_' && objFrm[i].value!=''){
				var len=objFrm[i].value.length;
				var ext=objFrm[i].value.substr(len-4,4);
				ext=ext.toLowerCase();
				if(len>0 && ext!='jpeg' && ext!='.jpg' && ext!='exif' && ext!='iptc' && ext!='tiff' && ext!='.tif' && ext!='.bmp' && ext!='.gif' && ext!='.png' && ext!='.pic' && ext!='.cel' && ext!='.cut' && ext!='.pal' && ext!='.eps' && ext!='.ico' ){							
					alert("Please browse \n jpeg OR jpg OR exif OR iptc OR tiff OR tif OR bmp OR gif OR png OR pic OR cel OR cut OR pal OR eps OR ico \n type only");
					objFrm[i].focus();
					return false;
				} 		
		}		
		if(objFrm[i].type=='file' && objDataTypeHolder=='F2_' && objFrm[i].value!=''){
				var len=objFrm[i].value.length;
				var ext=objFrm[i].value.substr(len-4,4);
				ext=ext.toLowerCase();		
				if(len>0 && ext!='jpeg' && ext!='.jpg' && ext!='.gif' && ext!='.png' ){							
					alert("Please browse jpeg OR jpg OR gif OR png type only");
					seledittab(2);
					objFrm[i].focus();
					return false;
				} 		
		}
		
		if(objFrm[i].type=='file' && objDataTypeHolder=='FE_' && objFrm[i].value!=''){
				var len=objFrm[i].value.length;
				var ext=objFrm[i].value.substr(len-4,4);
				ext=ext.toLowerCase();
				
			//	if(len>0 && ext!='jpeg' && ext!='.jpg' && ext!='exif' && ext!='iptc' && ext!='tiff' && ext!='.tif' && ext!='.bmp' && ext!='.gif' && ext!='.png' && ext!='.pic' && ext!='.cel' && ext!='.cut' && ext!='.pal' && ext!='.eps' && ext!='.ico' ){							
			//	alert("Please browse \n jpeg OR jpg OR exif OR iptc OR tiff OR tif OR bmp OR gif OR png OR pic OR cel OR cut OR pal OR eps OR ico \n type only");
										
				if(len>0 && ext!='jpeg' && ext!='.jpg' && ext!='.gif' && ext!='.png' ){							
					alert("Please browse jpeg OR jpg OR gif OR png type only");
					objFrm[i].focus();
					return false;
				} 		
		}

// validation for video clips---------------------------------> begin  wmv mov		

		if(objFrm[i].type=='file' && objDataTypeHolder=='VC_' && objFrm[i].value==''){
			alert("Please enter "+sChangedName);
			objFrm[i].focus();
			return false;
		}
		
		if(objFrm[i].type=='file' && objDataTypeHolder=='VC_' && objFrm[i].value!=''){
				var len=objFrm[i].value.length;
				var ext=objFrm[i].value.substr(len-4,4);
				ext=ext.toLowerCase();
				if(len>0 && ext!='.mov' && ext!='.wmv' ){							
					alert("Please browse mov OR wmv type only");
					objFrm[i].focus();
					return false;
				} 		
		}		
		if(objFrm[i].type=='file' && objDataTypeHolder=='VE_' && objFrm[i].value!=''){
				var len=objFrm[i].value.length;
				var ext=objFrm[i].value.substr(len-4,4);
				ext=ext.toLowerCase();										
				if(len>0 && ext!='.mov' && ext!='.wmv' ){							
					alert("Please browse mov OR wmv type only");
					objFrm[i].focus();
					return false;
				} 		
		}
// validation for video clips---------------------------------> end		
				
	}
	return true;
}


function FormatDate(d)
{
		var dd,mm;
		var l;
		l=d.indexOf("/");
		dd=d.substring(0,l);
		d=d.substring(l+1);
		l=d.indexOf("/");
		mm=d.substring(0,l);
		yy=d.substring(l+1);
		
		if (parseInt(dd) < 10)
			dd="0" + dd;
		if (parseInt(mm) < 10)
			mm="0" + mm;
		d= dd + "/" + mm + "/" + yy
		alert(d);
		return d;
		
}

function ValidateImg(objImg, isRequired)
{
	if(isRequired ==1 && objImg.value=='')
	{
		alert("Please enter image.");
		objImg.focus();
		return false;
	}
	if(objImg.value.length!=0)
	{
		if(objImg.value.length<5)
		{
			alert("Please enter valid image.");
			objImg.focus();
			objImg.select();
			return false;
		}
		var iPos = objImg.value.lastIndexOf(".")
		var sExt = objImg.value.substring(iPos);
		if((sExt.toUpperCase()=='.JPEG') || (sExt.toUpperCase()=='.JPG') || (sExt.toUpperCase()=='.GIF') || (sExt.toUpperCase()=='.BMP') )
		{
			return true;
		}
		else
		{
			alert("Please enter valid image.");
			objImg.focus();
			objImg.select();
			return false;
		}
	}
	return true;
}

function ValidateNumber(objName)
{
	//created on: 12th May 2002
	//Programmer: Naveen Sharma
	//Purpose	: This function is used to validate price. 
	//Arguments : Email object
		
	var h;
	var x;
	
	h=objName.length;
	x = objName;
	if (h==0)
	{
		alert("Price Can be numeric only");
		return false;
	}			
	for( i=0;i<h;i++)
	{
		z = x.substring(i,i+1);
		if ( z=="'"||z=='"' || (z >= "a" && z <= "z" ) || (z >= "A" && z <= "Z") )
		{
			alert("Price Can be numeric only");
			return false;
		}			
	}
	jj=x.indexOf(".");
	if (jj != "-1") 
		{
		hh=x.substring(jj);
		ll=hh.length;
		if (ll > 3) 
			{
			alert("Price Can have upto 2 decimal places");
			return false;
			}
		}
	x = objName;
	return true;
	
}

function ValidateNumber(objName)
{
	//created on: 12th May 2002
	//Programmer: Naveen Sharma
	//Purpose	: This function is used to validate email. 
	//Arguments : Email object
		
	var h;
	var x;
	
	h=objName.length;
	x = objName;
	if (h==0)
	{
		alert("Price cannot be left blank");
		return false;
	}			
	for( i=0;i<h;i++)
	{
		z = x.substring(i,i+1);
		if ( z=="'"||z=='"' || (z >= "a" && z <= "z" ) || (z >= "A" && z <= "Z") )
		{
			alert("Price Can be numeric only");
			return false;
		}			
	}
	jj=x.indexOf(".");
	if (jj != "-1") 
		{
		hh=x.substring(jj);
		ll=hh.length;
		if (ll > 3) 
			{
			alert("Price Can have upto 2 decimal places");
			return false;
			}
		}
	return true;
	
}

function getFormattedmsg(sVal)
{
	while(sVal.indexOf("_")!=-1)
	{
		sVal = sVal.replace("_", " ")
	}
	return sVal;
	
}

// Function for cheking the proper Email ID while making login in Classified and Community section
	function valLoginForm(obj)
{

if(ValidateForm(obj))
	{
			if (ValidateEMail(obj.TR_Email_ID.value))
			{
				return true;
			}
			else
			{
				alert("Please enter Email ID in proper format");
				obj.TR_Email_ID.focus();
				return false;			
			}
	}
	return false;
}


function valform(obj)
{
	
	if(ValidateForm(obj))
	{
			if (ValidateEMail(obj.TR_Email.value))
			{
				obj.submit()
				return true;
			}
			else
			{
				alert("Please enter Email in proper format")
				obj.TR_Email.select()
				return false;			
			}
	}
	return false;
}

	function keyvalid(){
			if(event.keyCode < 45 || event.keyCode > 57){ 
				event.returnValue = false;
			}	
			if(event.which < 45 || event.which > 57){ 
				return false;
			}
	}
	function redirect(opt){				
		if(opt==1){
			window.location="<?=DEFINE_ABSOLUTE_PATH?>display_first.php";
		}else if(opt==2){
			window.location="<?=DEFINE_ABSOLUTE_PATH?>billinfo.php";
		}else if(opt==3){
			window.location="<?=DEFINE_ABSOLUTE_PATH?>historyview.php";
		}else if(opt==4){
			window.location="http://www.eworldtradefair.com/cart/clear";						
		}
	}
function addRowToTable()
{
  var tbl = document.getElementById('tblatributeID');
  var lastRow = tbl.rows.length;  
  // if there's no header row in the table, then iteration = lastRow + 1
  var iteration = lastRow;
  var row = tbl.insertRow(lastRow);  
  // left cell
  var cellLeft = row.insertCell(0);
  var textNode = document.createTextNode(iteration+'.');  
  cellLeft.setAttribute('align','center');    
  cellLeft.appendChild(textNode);
  
  var sizecell = row.insertCell(1);
  var el = document.createElement('input');
  el.setAttribute('type', 'text');

  el.setAttribute('name', 'psize[]');
  el.setAttribute('id', 'sizeid' + iteration);
  el.setAttribute('size', '20');
  el.setAttribute('class', 'inp');  
  sizecell.appendChild(el);

  var pricecell = row.insertCell(2);
  var el = document.createElement('input');
  el.setAttribute('type', 'text');
  el.setAttribute('name', 'pprice[]');
  el.setAttribute('id', 'priceid' + iteration);
  el.setAttribute('size', '10');  
  el.setAttribute('class', 'inp');
  el.onkeypress = keyvalid;
  pricecell.appendChild(el);

  var colorcell = row.insertCell(3);
  var el = document.createElement('input');
  el.setAttribute('type', 'text');
  el.setAttribute('name', 'pcolor[]');
  el.setAttribute('id', 'colorid' + iteration);
  el.setAttribute('size', '20');
  el.setAttribute('class', 'inp');  
  colorcell.appendChild(el);
}
function keyvalid(){
			if(event.keyCode < 45 || event.keyCode > 57){ 
				event.returnValue = false;
			}	
			if(event.which < 45 || event.which > 57){ 
				return false;
			}
}
function removeRowFromTable()
{
  var tbl = document.getElementById('tblatributeID');
  var lastRow = tbl.rows.length;
  if (lastRow > 2) tbl.deleteRow(lastRow - 1);
}

function validateRow()
{
    var tbl = document.getElementById('tblatributeID');
    var lastRow = tbl.rows.length - 1;
    var i;
    for (i=1; i<=lastRow; i++) {
		var txtSize = document.getElementById('sizeid' + i);
		var txtPrice = document.getElementById('priceid' + i);
		var txtColor = document.getElementById('colorid' + i);
		  if (txtSize.value.length <= 0 || txtPrice.value.length <= 0 || txtColor.value.length <= 0) {
			alert('Product attributes: -\n\nRow '+ i +' is not filled \nEach cell of row must be filled');
			document.getElementById('sizeid' + i).focus();
			return false;
		  }    
  	}
	return true; 
}

function winopen(detailpage,iwidth,iheight)
{
	iLeft = parseInt(screen.width)/2-parseInt(iwidth)/2
	iTop = parseInt(screen.height)/2-parseInt(iheight)/2
	window.open(detailpage, "a", "toolbars=0, menubar=0, noresize, scrollbars=yes, left=" + iLeft + ",top=" + iTop + ", width=" + iwidth + ", height=" + iheight)
}

function popwin(page){
		iLeft = parseInt(screen.width)/2-617/2
		iTop = parseInt(screen.height)/2-500/2
		window.open(page, "a", "toolbars=0, menubar=0, noresize, scrollbars=yes, left=" + iLeft + ",top=" + iTop + ", width=617, height=500")
}

function full_screen_pop_up(theURL,windowname){
	window.open(theURL, windowname, ',type=fullWindow,fullscreen,scrollbars=yes');
}
function backtolist(url){
	window.location=url;
}
function reqlistsearch(){
	kyw=document.reqsearchfrm.keyword.value;
	cat=document.reqsearchfrm.category.value;
	loc=document.reqsearchfrm.location.value;
	window.location='http://www.eworldtradefair.com/buyer_requirement_list/keyword-'+kyw+'/category-'+cat+'/location-'+loc;
}
function CheckAllRows(totrows,chk,mainchk)
{
	//created on : 2 March 2004
	//Programmer : Naveen Sharma
	//Purpose 	: This function is used to check all the rows in list. 
	//Arguments : total rows,form name,initial checkbox id,main checkbox where we are clicking to check all checkbox rows
	if(document.getElementById(mainchk).checked==true){
		for (var i=1; i<=totrows; i++)
		{			
			eval("document.getElementById('"+chk+i+"').checked=true"); 		
		}
	}else{
		for (var i=1; i<=totrows; i++)
		{			
			eval("document.getElementById('"+chk+i+"').checked=false"); 		
		}
	}	
}

function addToFavorites(url,title){
		if (window.sidebar) // firefox
	window.sidebar.addPanel(title, url, "");
	else if(window.opera && window.print){ // opera
	var elem = document.createElement('a');
	elem.setAttribute('href',url);
	elem.setAttribute('title',title);
	elem.setAttribute('rel','sidebar');
	elem.click();
	}
	else if(document.all)// ie
	window.external.AddFavorite(url, title);

}

function goodchars_string(obj,allowed_str)
{
	var valid_str='';
	var str=obj.value;
	var keychar;
	allowed_str = allowed_str.toLowerCase();
	
	for(i=0;i<str.length;i++)
	{
		keychar = str.charAt(i).toLowerCase();
		
		if (allowed_str.indexOf(keychar) != -1)
		{
			valid_str+=	str.charAt(i);
		}
		
	}
	
	obj.value=valid_str;
}

// function for finding which key is pressed   
    function getkey(e)
    {
        if (window.event)
        return window.event.keyCode;
        else if (e)
        return e.which;
        else
        return null;
    }
// function for allowing pressing of keys as you want calling signature is onKeyPress="return goodchars(event,'0123456789')"
    function goodchars(e, goods)// e is event and goods is a string having all chars/number which u allow to press
    {
        var key, keychar;
        key = getkey(e);
        if (key == null) return true;
        // get character
        keychar = String.fromCharCode(key);
        keychar = keychar.toLowerCase();
        goods = goods.toLowerCase();
        // check goodkeys
        if (goods.indexOf(keychar) != -1)
        return true;
        // control keys
        if ( key==null || key==0 || key==8 || key==9 || key==13 || key==27 )
        return true;
        // else return false
        return false;
    }
	
function show_tbl(tbl_id){		
		document.getElementById(tbl_id).style.display='';		
}
function hide_tbl(tbl_id){				
		document.getElementById(tbl_id).style.display='none';
}
function hideshowtbl(show_tbl,hide_tbl){		
		document.getElementById(show_tbl).style.display='';
		document.getElementById(hide_tbl).style.display='none';
}
function hideshowmass(showstr,hidestr){		
	var show_array=showstr.split(",");
	var show_total=show_array.length;
	for(i=0; i<show_total; i++){	
		document.getElementById(show_array[i]).style.display='';
	}
	
	var hide_array=hidestr.split(",");
	var hide_total=hide_array.length;
	for(i=0; i<hide_total; i++){	
		document.getElementById(hide_array[i]).style.display='none';
	}
}

function showtblmass(showstr){		
	var show_array=showstr.split(",");
	var show_total=show_array.length;
	for(i=0; i<show_total; i++){	
		document.getElementById(show_array[i]).style.display='';
	}
}

function hidetblmass(hidestr){		
	var hide_array=hidestr.split(",");
	var hide_total=hide_array.length;
	for(i=0; i<hide_total; i++){	
		document.getElementById(hide_array[i]).style.display='none';
	}
}


function hideshow_post_offer(opt){
	if(opt==1){
		hideshowmass('buy1,buy2,buy3','sell1,sell2,sell3');
	}else if(opt==2){
		hideshowmass('sell1,sell2,sell3','buy1,buy2,buy3');
	}
}

function wordlimit(obj,totword,wcountid){
if(obj.value.length>totword){ 
obj.value=obj.value.substring(0,totword);   
}
document.getElementById(wcountid).innerHTML=obj.value.length;
}

function selectall(opt,tot,ids){
	if(opt==1){
		for(i=0; i<tot; i++){			
			document.getElementById(ids+i).checked=true;
		}
	}else if(opt==2){
		for(i=0; i<tot; i++){
			document.getElementById(ids+i).checked=false;
		}
	}
}
function SendEnquiry(){
	document.complistfrm.submit();
}
function xmlhttpPost(strURL,qrystr,divid){
    var xmlHttpReq = false;
    var self = this;
    // Mozilla/Safari
    if (window.XMLHttpRequest) {
        self.xmlHttpReq = new XMLHttpRequest();
    }
    // IE
    else if (window.ActiveXObject) {
        self.xmlHttpReq = new ActiveXObject("Microsoft.XMLHTTP");
    }
    self.xmlHttpReq.open('POST', strURL, true);
    self.xmlHttpReq.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    self.xmlHttpReq.onreadystatechange = function() {
        if (self.xmlHttpReq.readyState == 4) {
            document.getElementById(divid).innerHTML=self.xmlHttpReq.responseText;
        }
    }
    self.xmlHttpReq.send(qrystr);
}

function ValidatePostOffer(){

if(document.form1.offertype.value==1){
	if(document.form1.buy_products_services.value==''){
		alert('You must enter Products / Services you are looking for');
		document.form1.buy_products_services.focus();
		return false;
	}
	if(document.form1.buy_detail.value==''){
		alert('You must describe your buying requirements in detail');
		document.form1.buy_detail.focus();
		return false;
	}	
}else if(document.form1.offertype.value==2){
	if(document.form1.sell_products_services.value==''){
		alert('You must enter Products / Services you want to Sell');
		document.form1.sell_products_services.focus();
		return false;
	}
	if(document.form1.sell_detail.value==''){
		alert('You must describe your buying requirements in detail');
		document.form1.sell_detail.focus();
		return false;
	}		
}
if(document.form1.TR_security_code.value==''){
	alert('Please enter security code as shown in picture.');
	document.form1.TR_security_code.focus();
	return false;	
}
if(document.form1.memtype[0].checked==false && document.form1.memtype[1].checked==false){
	alert('Please select member type');
	return false;	
}

if(document.form1.memtype[0].checked==true){
	if(document.form1.loginemail.value==''){
		alert('Enter your email');
		document.form1.loginemail.focus();
		return false;
	}
	if(document.form1.loginpassword.value==''){
		alert('Enter your password');
		document.form1.loginpassword.focus();
		return false;
	}	
}else if(document.form1.memtype[1].checked==true){
	if(document.form1.yourname.value==''){
		alert('Enter your name');
		document.form1.yourname.focus();
		return false;
	}

	if(document.form1.email.value==''){
		alert('Enter your email');
		document.form1.email.focus();
		return false;
	}
	
	if(document.form1.telephone.value=='' && document.form1.mobile.value=='')
	{
		alert("Please enter either telephone or mobile number.");
		document.form1.telephone.focus();
		return false;
	}
	if(document.form1.telephone.value)
	{
		if(document.form1.tele_cnt_code.value=='')
		{
			alert("Please select country code for telephone number.");
			document.form1.tele_cnt_code.focus();
			return false;
		}
		else if(document.form1.tele_area_code.value=='')
		{
			alert("Please select area code for telephone number.");
			document.form1.tele_area_code.focus();
			return false;
		}
	}
	if(document.form1.mobile.value)
	{
		if(document.form1.mob_cnt_code.value=='')
		{
			alert("Please select country code for mobile number.");
			document.form1.mob_cnt_code.focus();
			return false;
		}
		
	}
	if(document.form1.city.value==''){
		alert('Please select city');
		document.form1.city.focus();
		return false;
	}
	if(document.form1.country.value==''){
		alert('Please select country');
		document.form1.country.focus();
		return false;
	}
	
}
	
}
function sell_lead_join_now(form2){
	
	if(ValidateForm(form2)){
		var yourname=document.form2.TR_your_name.value;
		var company=document.form2.company.value;
		var email=document.form2.TREF_your_email.value;
		var website=document.form2.website.value;
		var telephone=document.form2.TR_telephone.value;
		var mobile=document.form2.mobile.value;
		var country=document.form2.country.value;
		
		document.form2.TR_your_name.disabled=true;
		document.form2.company.disabled=true;
		document.form2.TREF_your_email.disabled=true;
		document.form2.website.disabled=true;
		document.form2.TR_telephone.disabled=true;
		document.form2.mobile.disabled=true;
		document.form2.country.disabled=true;
		
		document.form2.form2subbtn.disabled=true;

		qstr = 'yourname=' + escape(yourname)+'&company=' + escape(company)+'&email=' + escape(email)+'&website=' + escape(website)+'&telephone=' + escape(telephone)+'&mobile=' + escape(mobile)+'&country=' + escape(country)+'&action=sell-leads-join-now';
		
		xmlhttpPost('http://sellleads.eworldtradefair.com/ajax_joinnow.php',qstr,'joinnowdiv');
		
		return false;
		
	}else{	
		return false;	
	}	
}
function sell_lead_response(form1){
	
	if(ValidateForm(form1)){
		var message=document.form1.TR_message.value;
		var email=document.form1.TREF_email.value;
		var password=document.form1.TR_password.value;
		var sleadid=document.form1.sleadid.value;
				
		document.form1.TR_message.disabled=true;
		document.form1.TREF_email=true;
		document.form1.TR_password.disabled=true;
				
		document.form1.form1subbtn.disabled=true;

		qstr = 'message=' + escape(message)+'&email=' + escape(email)+'&password=' + escape(password)+'&sleadid=' + escape(sleadid)+'&action=sell-lead-response';
		
		xmlhttpPost('http://sellleads.eworldtradefair.com/ajax_joinnow.php',qstr,'sendresponsediv');
		
		return false;
		
	}else{	
		return false;	
	}	
}


function buy_lead_join_now(form2){
	
	if(ValidateForm(form2)){
		var yourname=document.form2.TR_your_name.value;
		var company=document.form2.company.value;
		var email=document.form2.TREF_your_email.value;
		var website=document.form2.website.value;
		var telephone=document.form2.TR_telephone.value;
		var mobile=document.form2.mobile.value;
		var country=document.form2.country.value;
		
		document.form2.TR_your_name.disabled=true;
		document.form2.company.disabled=true;
		document.form2.TREF_your_email.disabled=true;
		document.form2.website.disabled=true;
		document.form2.TR_telephone.disabled=true;
		document.form2.mobile.disabled=true;
		document.form2.country.disabled=true;
		
		document.form2.form2subbtn.disabled=true;

		qstr = 'yourname=' + escape(yourname)+'&company=' + escape(company)+'&email=' + escape(email)+'&website=' + escape(website)+'&telephone=' + escape(telephone)+'&mobile=' + escape(mobile)+'&country=' + escape(country)+'&action=buy-leads-join-now';
		
		xmlhttpPost('http://buyleads.eworldtradefair.com/ajax_joinnow.php',qstr,'joinnowdiv');
		
		return false;
		
	}else{	
		return false;	
	}	
}
function buy_lead_response(form1){
	
	if(ValidateForm(form1)){
		var message=document.form1.TR_message.value;
		var email=document.form1.TREF_email.value;
		var password=document.form1.TR_password.value;
		var sleadid=document.form1.sleadid.value;
				
		document.form1.TR_message.disabled=true;
		document.form1.TREF_email=true;
		document.form1.TR_password.disabled=true;
				
		document.form1.form1subbtn.disabled=true;

		qstr = 'message=' + escape(message)+'&email=' + escape(email)+'&password=' + escape(password)+'&sleadid=' + escape(sleadid)+'&action=buy-lead-response';
		
		xmlhttpPost('http://buyleads.eworldtradefair.com/ajax_joinnow.php',qstr,'sendresponsediv');
		
		return false;
		
	}else{	
		return false;	
	}	
}

function load_sub_cat(catid){
	if(catid){
		qstr = 'catid=' + escape(catid)+'&action=load-sub-cat';
		xmlhttpPost('http://www.eworldtradefair.com/ajax.php',qstr,'subcatdiv');
		return false;
	}	
}

/***********  FOR FOOTER FUNCTIONS *******************/

function emailThisPage() {
    var target = document.location;

  	var win = window.open('http://www.eworldtradefair.com/email_url.php?url=' + target, 'notice', 'width=600,height=560,location=no,toolbar=no,status=no,resizable=no,scrollbars=yes');
  	win.focus();
}

function addToFavorite(){
	
	var titleVar = document.title;
	
	var urlVar = document.location;
	
	// firefox
	if (window.sidebar) {
		
		window.sidebar.addPanel(titleVar, urlVar, "");
	}
	// opera
	else if(window.opera && window.print) { 
		var elem = document.createElement('a');
		elem.setAttribute('href',urlVar);
		elem.setAttribute('title',titleVar);
		elem.setAttribute('rel','sidebar');
		elem.click();
	} 
	// ie
	else  {
		window.external.AddFavorite(urlVar,titleVar)
	}	

}


function firefoxAlert(pageurl) {
	
	if(navigator.appName=="Microsoft Internet Explorer") {
		
		pageurl.style.behavior='url(#default#homepage)';pageurl.setHomePage('http://www.eworldtradefair.com');
	}
	else {
		alert('To set EWorldTradeFair.com as your home page in Firefox, click and drag the button to the "Home" icon in your browser.');
	}
	return false;
}

browserName = navigator.appName;
browserVer = parseInt(navigator.appVersion);

condition = !(( (browserName.indexOf("Explorer") >=0 ) && (browserVer < 4) ) ||  ((browserName.indexOf("Netscape") >=0 ) && (browserVer < 2) ) ) ;

if (condition == true  )
    CanAnimate = true;
else
    CanAnimate = false;

function openchild(thisurl){
	if ( CanAnimate ){
	
			var windowHeight;
			var windowWidth;
			var windowTop;
			var windowLeft;
			windowHeight=(screen.height*(80/100))*0.85;
			windowWidth=(screen.width*(57/100)-200);
			windowTop=(screen.height*(20/100))*0.8;
			windowLeft=screen.width*(40.2/100);
	
			msgWindow=window.open( '' ,'subwindow','toolbar=no,location=no,directories=no,status=yes,scrollbars=yes,menubar=no,resizable=yes,top='+windowTop+',left='+windowLeft+',width='+windowWidth+',height='+windowHeight);	
			msgWindow.focus();
			msgWindow.location.href = thisurl;
	}
	else {
			msgWindow=window.open( thisurl,'subwindow','toolbar=no,location=no,directories=no,status=yes,scrollbars=yes,menubar=no,resizable=yes,width=510,height=420');
		
	}

}

function CompanyListImpr(){
		var CompidARR = document.getElementsByName('hidecompid[]');
		var totCompidARR = CompidARR.length;
		var CompidARRAY= new Array();
		for(var i=0; i<totCompidARR; i++){
			CompidARRAY[i]=CompidARR[i].value;
		}
		
		var CompidSTR = CompidARRAY.join(",");
		
		qstr = 'campidsimpr=' + escape(CompidSTR)+'&action=companyimpression';
		xmlhttpPost('http://www.eworldtradefair.com/ajax.php',qstr,'CLImprDIV'); 
		
}

function companyclick(compid){
	if(compid){
		qstr = 'campsid=' + escape(compid)+'&action=companyclick';
		xmlhttpPost('http://www.eworldtradefair.com/ajax.php',qstr,'CLImprDIV'); 
	}
}

function pageview(compid){
	if(compid){
		qstr = 'campsid=' + escape(compid)+'&action=pageview';
		xmlhttpPost('http://www.eworldtradefair.com/ajax.php',qstr,'CLImprDIV'); 
	}
}

function viewphones(compid,divid){
	if(compid){
		qstr = 'campsid=' + escape(compid)+'&action=viewcompanyphones';
		xmlhttpPost('http://www.eworldtradefair.com/ajax.php',qstr,divid); 
	}
}

