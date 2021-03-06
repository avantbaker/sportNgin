<?php

//==============================================================
//=========         SPORT NGIN TEMPLATE TWO           ==========
//==============================================================

$request = json_decode( file_get_contents("php://input"), false );

require_once('date-conversion.php');

$excFee 				= $request->excludeFee; 		
$excDeadline 			= $request->excludeDeadline; 	
$excGames 				= $request->excludeGames;  		
$excFirst 				= $request->excludeFirst;		
$excLast 				= $request->excludeLast; 		
$excEmail 				= $request->excludeEmail; 		
$excPhone 				= $request->excludePhone; 		
$excSite 				= $request->excludeWebsite; 		
$excNumOfTeams 			= $request->excludeNumOfTeams;

$hostOrg 				= strtoupper($request->hostOrg);
$tournamentName 		= strtoupper($request->tournamentName);	
$city 					= strtoupper($request->city);	
$state 					= strtoupper($request->state);	
$startDate 				= formatDate($request->startDate); 	
$endDate 				= formatDate($request->endDate);
$description 			= $request->description;	
$teams 					= strtoupper($request->numOfTeams);	
$gameMin 				= $request->gameMin;	
$register 				= formatDate($request->registerBy);	
$entry 					= $request->entryFee;	
$website 				= strtoupper($request->twebsiteName);	
$dirFName 				= strtoupper($request->dirFirstName);	
$dirLName 				= strtoupper($request->dirLastName);	
$email 					= strtoupper($request->tEmail);	
$phone 					= $request->tphone;	
$cookie 				= $request->userID;

$width = null;
$tableWidth = "width = '100%'";

$exclusionArr = array(
	$excNumOfTeams,
	$excGames,
	$excFee
);

$count = count(array_filter($exclusionArr));

switch ($count) {
    case 1:
        $width = "50%";
        $tableWidth = "width = '390px'";
        break;
    case 2:
        $width = "100%";
        break;
    default:
        $width = "33.3%";
}

$html = "
<html>
<head>
<style>
	
	@page {
		size: 8.5in 11in;
		sheet-size: 8.5in 11in;
		margin: 0;
		background-image: url('../assets/img/baseball-template-two_8-5x11_FULL.jpg');
		background-repeat: no-repeat;
		background-position: top left;
		background-image-resize: 6;
	}
	
	body {
		margin: 0;
		margin-collapse: collapse;
	}

	div.host-name {
		position: fixed; 
		width: 80%;
		left: 10%;
		text-align: center;
		top: 6%;
		font-family: 'Roboto Condensed', sans-serif;
		font-weight: bold;
		font-size: 16px;
		color: #fbb03b;
		text-transform: uppercase;
		letter-spacing: 1px;
		overflow: hidden;
  	}
	
	div.tournament-name {
		position: fixed; 
		width: 80%;
		left: 10%;
		text-align: center;
		bottom: 70%;
		font-family: 'Roboto', sans-serif;
		font-weight: bold;
		font-size: 48px;
		line-height: 1; 
		color: white;
		text-transform: uppercase;
		overflow: hidden;
 	}

    div.tournament-date {
	    position: fixed; 
		width: 80%;
		left: 10%;
		top: 31%;
		text-align: center;
		overflow: hidden;
  	}
  	 
  	div.date-wrapper {
		display: block;
		width: 240px;
		margin: 0 auto;
		padding: 4px 0;
		background: #fff;
		font-family: 'Roboto Condensed', sans-serif;
		font-weight: bold;
		font-size: 16px;
		color: black;
		text-align: center;
		overflow: hidden;
	}
  	
  	div.tournament-location {
	  	position: fixed; 
		width: 80%;
		left: 10%;
		top: 36%;
		font-family: 'Roboto Condensed', sans-serif;
		font-weight: bold;
		font-size: 16px;
		color: #fbb03b;
		text-align: center;
		text-transform: uppercase;
		letter-spacing: 1px;
		overflow: hidden;
	}
  	
  	div.tournament-details {
	  	position: fixed;
	  	width: 64%;
		left: 18%;
		bottom: 40%;
		line-height: 1.5;
		text-align: center;
		overflow: hidden;
	}
	
	span.tournament-description {
		padding-bottom: 5px;
		font-family: 'Roboto Condensed', sans-serif;
		font-size: 16px;
		font-weight: normal;
		color: white;
		text-align: center;
	}
	
	div.tournament-deadline {
		position: fixed; 
		width: 80%;
		left: 10%;
		top: 62%;
		font-family: 'Roboto Condensed', sans-serif;
		font-weight: normal;
		text-align: center;
		text-transform: uppercase;
		color: white;
		overflow: hidden;
	}
	
	div.tournament-callouts-wrapper {
		position: fixed; 
		width: 84%;
		left: 8%;
		top: 68%;
		overflow: hidden;
	}
	
	table.tournament-callouts {
		width: 100%;
		text-align: center;
		overflow: hidden;
	}
	
	td.tournment-callout {
		width: 33.3%;
		color: #fbb03b;
		font-family: 'Roboto Condensed', sans-serif;
		font-weight: bold;
		font-size: 16px;
		line-height: 1.25;
		text-transform: uppercase;
		letter-spacing: 1px;
	}
	
	span.teams-number,
	span.games-number,
	span.fee {
		font-family: 'Roboto', sans-serif;
		font-weight: bold;
		font-size: 48px;
		color: white; 
	}
	
	div.tournament-contact {
		position: fixed; 
		width: 80%;
		left: 10%;
		bottom: 6%;
		text-align: center;
		overflow: hidden;
	}
	
	span.contact-information {
		font-family: 'Roboto Condensed', sans-serif;
		font-weight: bold;
		color: #fbb03b;
		font-size: 16px;
		text-align: center;
		text-transform: uppercase;
	}
	span.tournament-website {
		display: block;
		width: 100%;
		padding-top: 16px;
		font-family: 'Roboto', sans-serif;
		font-size: 22px;
		font-weight: bold;
		color: white;
		text-align: center;
	}
	
</style>
</head>

<body>
	
	<div class='host-name'>
		<span>{$hostOrg}</span>
	</div>
	
	<div class='tournament-name'>
		<span>{$tournamentName}</span>
	</div>
	
	<div class='tournament-date'>
		<div class='date-wrapper'>
			<span class='start-date'>{$startDate}</span> THRU <span class='end-date'>{$endDate}</span>
		</div>
	</div>
	
	<div class='tournament-location'>
		<span class='tournament-city'>{$city}</span>, <span class='tournament-state'>{$state}</span>
	</div>
	
	<div class='tournament-details'>
		<span class='tournament-description'>{$description}</span>
	</div>";

if( $excDeadline === false ) :			
	$html .= "<div class='tournament-deadline'>
				REGISTER BY <span class='register-date'>{$register}</span>
			 </div>";
endif;

	$html .= "<div class='tournament-callouts-wrapper'>
				<table class='tournament-callouts' {$tableWidth} border='0' align='center'>
					<tr>";



		if( $excNumOfTeams === false ) :        
					$html .=	"<td align='center' width='{$width}' class='tournment-callout'>
									TEAMS<br>
									<span class='teams-number'>{$teams}</span>
								</td>";
		endif;

		if( $excGames === false ) :				
					$html .=	"<td align='center' width='{$width}' class='tournment-callout'>
									GAME MINIMUM<br>
									<span class='games-number'>{$gameMin}</span>
								</td>";
		endif;

		if( $excFee === false ) :				
					$html .=	"<td align='center' width='{$width}' class='tournment-callout tournament-fee'>
									ENTRY FEE<br>
									<span class='fee'>&#36;{$entry}</span>
								</td>";
		endif;		



			$html .=   "</tr>
				</table>
					
			</div>
	
	<div class='tournament-contact'>
		<span class='contact-information'>
			<span class='director-name'>";

if( $excFirst === false ) :
			$html .=  "<span class='director-first'>{$dirFName} </span>"; 
endif;

if( $excLast === false ) :
			$html .=  "<span class='director-last'>{$dirLName}</span>"; 
endif;
			$html .=  " | ";
			
			$html .= "</span>
			
			<span class='director-email'>";
if( $excEmail === false ) :
			$html .= "<span class='email'>{$email}</span>";
endif;
			$html .= " | ";
			
			$html .= "</span>";
if( $excPhone === false ) :
			$html .= "<span class='director-phone'>{$phone}</span>";
endif;			
			$html .= "<br>";
				
if ($excSite === false) :
	$html .= "<span class='tournament-website'>{$website}</span>";
endif;
	$html .= "<br>
		</span>
	</div>
		
			
</body>
</html>
";


//==============================================================
//==============================================================
//==============================================================

include("../mpdf/mpdf.php");

$mpdf= new mPDF();
$mpdf->SetDisplayMode('fullpage');
$mpdf->WriteHTML($html);
$mpdf->Output( SPORTNGIN . $cookie .'-sportNgin8x11.pdf','F');

exit;
//==============================================================
//==============================================================
//==============================================================

?>
