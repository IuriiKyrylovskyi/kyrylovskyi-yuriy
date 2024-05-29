export const respondEmailTemplate = () => {
  return `
	<!DOCTYPE html>
	<html>
		<head>
			<title>Visitor's question</title>
			<link
				rel="important stylesheet"
				href="chrome://messagebody/skin/messageBody.css"
			/>
		</head>
		<body>
			<br />
			<!DOCTYPE html>
			<html
				lang="en"
				xmlns="https://www.w3.org/1999/xhtml"
				xmlns:v="urn:schemas-microsoft-com:vml"
				xmlns:o="urn:schemas-microsoft-com:office:office"
			>
				<head>
					<meta http-equiv="Content-Type" content="text/html; " />
					<meta name="viewport" content="width=device-width" />
					<!-- Forcing initial-scale shouldn't be necessary -->
					<meta http-equiv="X-UA-Compatible" content="IE=edge" />
					<!-- Use the latest (edge) version of IE rendering engine -->
					<meta name="x-apple-disable-message-reformatting" />
					<!-- Disable auto-scale in iOS 10 Mail entirely -->
					<meta name="color-scheme" content="light dark" />
					<meta name="supported-color-schemes" content="light dark" />
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
					<link
						href="https://fonts.googleapis.com/css2?family=Inter&family=Gloria+Hallelujah&family=Inter+Tight:wght@600&family=Lato:wght@700&family=Nunito:wght@600;700&display=swap"
						rel="stylesheet"
					/>
					<title>Visitor's question</title>
					<!-- The title tag shows in email notifications, like Android 4.4. -->
					<!-- Web Font / @font-face : BEGIN -->
					<!-- NOTE: If web fonts are not required, lines 10 - 27 can be safely removed. -->
	
					<!-- Desktop Outlook chokes on web font references and defaults to Times New Roman, so we force a safe fallback font. -->
					<!--[if mso]>
						<style>
							* {
								font-family: 'Inter', sans-serif !important;
							}
						</style>
					<![endif]-->
	
					<!-- All other clients get the webfont reference; some will render the font and others will silently fail to the fallbacks. More on that here: https://stylecampaign.com/blog/2015/02/webfont-support-in-email/ -->
					<!--[if !mso]><!-->
					<!-- insert web font reference, eg: <link href='https://cdn.jotfor.ms/fonts/?family=Inter:400:700' rel='stylesheet' type='text/css'> -->
					<!-- <link href="https://cdn.jotfor.ms/fonts/?family=Inter:300:400:700" rel="stylesheet"> -->
					<!--<![endif]-->
	
					<!-- Web Font / @font-face : END -->
	
					<!-- CSS Reset : BEGIN -->
					<style>
						:root {
							color-scheme: light dark;
							supported-color-schemes: light dark;
						}
	
						/* What it does: Remove spaces around the email design added by some email clients. */
						/* Beware: It can remove the padding / margin and add a background color to the compose a reply window. */
						html,
						body {
							margin: 0 auto !important;
							padding: 0 !important;
							height: 100% !important;
							width: 100% !important;
						}
	
						body {
							font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Inter',
								'Nutino', Helvetica, Arial, sans-serif, 'Apple Color Emoji',
								'Segoe UI Emoji', 'Segoe UI Symbol', 'Gloria Hallelujah', cursive;
						}
	
						.body {
							margin: 0 auto !important;
						}
	
						/* What it does: Stops email clients resizing small text. */
						* {
							-ms-text-size-adjust: 100%;
							-webkit-text-size-adjust: 100%;
						}
	
						div,
						p,
						a,
						li,
						td {
							-webkit-text-size-adjust: none;
							-webkit-font-smoothing: antialiased;
							-moz-osx-font-smoothing: grayscale;
							text-rendering: optimizeLegibility;
						}
	
						/* What it does: Centers email on Android 4.4 */
						div[style*='margin: 16px 0'] {
							margin: 0 !important;
						}
	
						/* What it does: Stops Outlook from adding extra spacing to tables. */
						table,
						td {
							mso-table-lspace: 0pt !important;
							mso-table-rspace: 0pt !important;
						}
	
						/* What it does: Fixes webkit padding issue. Fix for Yahoo mail table alignment bug. Applies table-layout to the first 2 tables then removes for anything nested deeper. */
						table {
							border-spacing: 0 !important;
							border-collapse: collapse !important;
							table-layout: fixed !important;
							margin: 0 auto !important;
						}
	
						table table table {
							table-layout: auto;
						}
	
						table,
						td {
							border-spacing: 0 !important;
							border-collapse: collapse !important;
						}
	
						/* What it does: Prevents Windows 10 Mail from underlining links despite inline CSS. Styles for underlined links should be inline. */
						a {
							text-decoration: none;
						}
	
						/* What it does: Uses a better rendering method when resizing images in IE. */
						img {
							-ms-interpolation-mode: bicubic;
						}
	
						/* What it does: A work-around for email clients meddling in triggered links. */
						*[x-apple-data-detectors],
			/* iOS */
			.unstyle-auto-detected-links *,
			.aBn {
							border-bottom: 0 !important;
							cursor: default !important;
							color: inherit !important;
							text-decoration: none !important;
							font-size: inherit !important;
							font-family: inherit !important;
							font-weight: inherit !important;
							line-height: inherit !important;
						}
	
						/* What it does: Prevents Gmail from changing the text color in conversation threads. */
						.im {
							color: inherit !important;
						}
	
						/* What it does: Prevents Gmail from displaying a download button on large, non-linked images. */
						.a6S {
							display: none !important;
							opacity: 0.01 !important;
						}
	
						/* If the above doesn't work, add a .g-img class to any image in question. */
						img.g-img + div {
							display: none !important;
						}
					</style>
					<!-- CSS Reset : END -->
					<!-- Reset list spacing because Outlook ignores much of our inline CSS. -->
					<!--[if mso]>
						<style type="text/css">
							ul,
							ol {
								margin: 0 !important;
							}
							li {
								margin-left: 30px !important;
							}
							li.list-item-first {
								margin-top: 0 !important;
							}
							li.list-item-last {
								margin-bottom: 10px !important;
							}
						</style>
					<![endif]-->
	
					<!-- Progressive Enhancements : BEGIN -->
					<style>
						/* What it does: Hover styles for buttons */
						.button-td,
						.button-a {
							background: #f98e03;
							background: linear-gradient(
								90deg,
								rgba(249, 142, 3, 1) 0%,
								rgba(224, 100, 58, 1) 100%
							);
						}
	
						button:hover {
							background: linear-gradient(
									0deg,
									rgba(255, 255, 255, 0.2) 0%,
									rgba(255, 255, 255, 0.2) 100%
								),
								linear-gradient(
									0deg,
									rgb(110, 137, 231) 0%,
									rgb(110, 137, 231) 100%
								),
								linear-gradient(
									93deg,
									rgb(255, 128, 173) 0%,
									rgb(110, 137, 231) 136.18%
								),
								rgb(31, 40, 71);
						}
	
						/* .button-td-primary:hover,
					.button-a-primary:hover {
							background: #555555 !important;
							border-color: #555555 !important;
					} */
						.show-on-responsive {
							/*table-cell*/
							display: none !important;
						}
	
						/* Media Queries */
	
						@media screen and (max-width: 767px) {
							.email-container {
								width: 100% !important;
								margin: auto !important;
							}
	
							.padding-container {
								padding: 0px 15px 0px 15px !important;
								mso-padding-alt: 0px 15px 0px 15px !important;
							}
	
							*[class].mobile {
								width: 100% !important;
							}
	
							/* What it does: Forces elements to resize to the full width of their container. Useful for resizing images beyond their max-width. */
							.fluid {
								max-width: 100% !important;
								height: auto !important;
								margin-left: auto !important;
								margin-right: auto !important;
							}
	
							/* What it does: Forces table cells into full-width rows. */
							.stack-column,
							.stack-column-center {
								display: block !important;
								width: 100% !important;
								max-width: 100% !important;
								direction: ltr !important;
							}
	
							/* And center justify these ones. */
							.stack-column-center {
								text-align: center !important;
							}
	
							.stack-column-center h2,
							.stack-column-center p {
								text-align: center !important;
							}
	
							/* What it does: Generic utility class for centering. Useful for images, buttons, and nested tables. */
							.center-on-narrow {
								text-align: center !important;
								display: block !important;
								margin-left: auto !important;
								margin-right: auto !important;
								float: none !important;
							}
	
							table.center-on-narrow {
								display: inline-block !important;
							}
	
							/* What it does: Adjust typography on small screens to improve readability */
							.email-container p {
								/*font-size: 17px !important;*/
							}
	
							.button-a {
								font-size: 16px !important;
								line-height: 1 !important;
							}
	
							/*u + .body{!*iOS Gmail app full width*!*/
							/*min-width : 100vw !important;*/
							/*margin: 0 auto !important;*/
							/*}*/
	
							table td {
								/*border-color : #ffffff !important;*/
								/*background-color : #ffffff !important;*/
							}
	
							u + .body .gmail-blend-screen {
								background: #fff;
								mix-blend-mode: screen;
							}
	
							u + .body .gmail-blend-difference {
								background: #fff;
								mix-blend-mode: difference;
							}
	
							.social-networks {
								max-width: 232px !important;
							}
	
							/*Keeps these rules at the end for more priority*/
							.inline-on-responsive {
								display: block !important;
								width: 100% !important;
								text-align: center !important;
							}
	
							.hide-on-responsive {
								/*replace with .stack-column-center*/
								display: none !important;
							}
	
							.show-on-responsive {
								/*table-cell*/
								display: block !important;
							}
	
							.full-center-responsive-logo {
								width: 100%;
							}
	
							.full-center-responsive-logo img {
								margin: 0 auto;
							}
	
							.mobile-padding-fix {
								padding-left: 15px !important;
								padding-right: 15px !important;
								padding-top: 15px !important;
								padding-bottom: 15px !important;
							}
	
							.mobile-pt-0 {
								padding-top: 0 !important;
							}
	
							.mobile-pt-16 {
								padding-top: 16px !important;
							}
	
							.mobile-pt-32 {
								padding-top: 32px !important;
							}
	
							.mobile-pb-0 {
								padding-bottom: 0 !important;
							}
	
							.mobile-pb-16 {
								padding-bottom: 16px !important;
							}
	
							.mobile-pb-32 {
								padding-bottom: 32px !important;
							}
	
							.mobile-pl-0 {
								padding-left: 0 !important;
							}
	
							.mobile-pl-16 {
								padding-left: 16px !important;
							}
	
							.mobile-pl-32 {
								padding-left: 32px !important;
							}
	
							.mobile-pr-0 {
								padding-right: 0 !important;
							}
	
							.mobile-pr-16 {
								padding-right: 16px !important;
							}
	
							.mobile-pr-32 {
								padding-top: 32px !important;
							}
	
							.g-img {
								width: 100%;
								height: auto;
							}
						}
	
						/* What it does: Removes right gutter in Gmail iOS app: https://github.com/TedGoas/Cerberus/issues/89  */
						/* Create one of these media queries for each additional viewport size you'd like to fix */
	
						@media screen and (max-width: 525px) {
							.mobile-hidden {
								display: none !important;
							}
	
							.mobile-header-fix {
								font-size: 30px !important;
								line-height: 40px !important;
							}
						}
	
						@media screen and (max-width: 480px) {
							img.enterprise {
								height: 23px !important;
							}
						}
	
						/* iPhone 4, 4S, 5, 5S, 5C, and 5SE */
						@media only screen and (min-width: 320px) and (max-width: 374px) {
							u + .body {
								min-width: 320px !important;
								margin: 0 auto !important;
							}
	
							.mobile-header-fix {
								font-size: 22px !important;
								line-height: 32px !important;
							}
						}
	
						/* iPhone 6, 6S, 7, 8, and X */
						@media only screen and (min-width: 375px) and (max-width: 413px) {
							u + .body {
								min-width: 375px !important;
								margin: 0 auto !important;
							}
	
							.mobile-header-fix {
								font-size: 26px !important;
								line-height: 36px !important;
							}
						}
	
						/* iPhone 6+, 7+, and 8+ */
						@media only screen and (min-width: 414px) {
							u + .body {
								min-width: 414px !important;
								margin: 0 auto !important;
							}
	
							@media only screen and (min-width: 526px) and (max-width: 600px) {
								.mobile-header-fix {
									font-size: 36px !important;
									line-height: 46px !important;
								}
							}
						}
	
						/*  fix align problem for iPhone 6 on gmail app */
						@media only screen and (min-width: 375px) and (max-width: 413px) {
							u + .body {
								min-width: 375px !important;
								width: 375px !important;
								margin: 0 auto !important;
							}
						}
	
						/* SAMSUNG MAIL ANDROID 7.0 WIDTH FIX */
						#MessageViewBody,
						#MessageWebViewDiv {
							width: 100% !important;
							margin: 0 auto !important;
						}
					</style>
					<style>
						@media (prefers-color-scheme: light) {
							h1,
							h2,
							h3,
							p,
							td,
							.form-head {
								color: #1f2847 !important;
							}
	
							h1 > a {
								color: #1f2847 !important;
							}
	
							.body-bg {
								background-color: #fff !important;
							}
	
							.content-bg {
								background-color: #fff !important;
							}
	
							/* .email-container {
							background-color: #fff;
					} */
	
							.light-img {
								display: block !important;
								overflow: visible !important;
								float: none !important;
								max-height: inherit !important;
								max-width: inherit !important;
								line-height: auto !important;
								margin-top: 0px !important;
								visibility: inherit !important;
							}
	
							/* Hides Light Mode-Only Content, Like Images */
							.dark-img {
								display: none;
								display: none !important;
							}
						}
	
						@media (prefers-color-scheme: light) {
							.light-img {
								display: block !important;
								overflow: visible !important;
								float: none !important;
								max-height: inherit !important;
								max-width: inherit !important;
								line-height: auto !important;
								margin-top: 0px !important;
								visibility: inherit !important;
							}
	
							.dark-img {
								display: none;
								display: none !important;
							}
						}
	
						/* Shows Dark Mode-Only Content, Like Images */
						[data-ogsc] .dark-img {
							display: block !important;
							overflow: visible !important;
							float: none !important;
							max-height: inherit !important;
							max-width: inherit !important;
							line-height: auto !important;
							margin-top: 0px !important;
							visibility: inherit !important;
						}
	
						/* Hides Light Mode-Only Content, Like Images */
						[data-ogsc] .light-img {
							display: none;
							display: none !important;
						}
					</style>
					<!-- Progressive Enhancements : END -->
	
					<!-- What it does: Makes background images in 72ppi Outlook render at correct size. -->
					<!--[if gte mso 9]>
						<xml>
							<o:OfficeDocumentSettings>
								<o:AllowPNG />
								<o:PixelsPerInch>96</o:PixelsPerInch>
							</o:OfficeDocumentSettings>
						</xml>
					<![endif]-->
					<!-- TODO: include with gulp with email type -->
					<!-- Custom head data will be below (e.g: custom css) -->
					<style>
						@media (prefers-color-scheme: dark) {
							p a,
							span.orderlist {
								color: #000 !important;
							}
						}
	
						@media (max-width: 767px) {
							center {
								padding: 0 !important;
							}
							.header-block {
								padding: 10px 0 !important;
							}
							.tr-socials td {
								display: block !important;
								width: 100% !important;
								text-align: center !important;
								margin: 16px 0px;
							}
							.tr-socials td a {
								margin: 0 12px !important;
							}
	
							.logo-image {
								max-width: 40px !important;
							}
						}
						@media screen and (min-width: 563px) {
							.salesforce-hidden {
								display: none !important;
							}
						}
	
						@media screen and (max-width: 563px) {
							.salesforce-show {
								display: none !important;
							}
						}
					</style>
					<!--[if mso]>
						<style>
							.section-top {
								background-image: url('https://emails.jotform.com/img/newsletter/2023/december/section-bg.png?v=1702393126791');
							}
						</style>
					<![endif]-->
				</head>
				<!--
		The email background color (#FFF) is defined in three places:
		1. body tag: for most email clients
		2. center tag: for Gmail and Inbox mobile apps and web versions of Gmail, GSuite, Inbox, Yahoo, AOL, Libero, Comcast, freenet, Mail.ru, Orange.fr
		3. mso conditional: For Windows 10 Mail
	-->
	
				<body
					width="100%"
					style="
						width: 100%;
						margin: 0 auto !important;
						padding: 30px 0 !important;
						mso-line-height-rule: exactly;
						background-color: #ffffff;
					"
					class="body body-bg"
				>
					<center
						style="
							width: 100%;
							margin: 0 auto !important;
							background-color: #c2f3ff;
							max-width: 692px;
							width: 100%;
							margin: 0 auto;
							padding: 30px;
							font-family: 'Inter';
							font-size: 14px;
							font-style: normal;
							font-weight: 400;
							line-height: 160%;
							color: #1f2847;
						"
						class="body-bg"
					>
						<!--[if mso | IE]>
			<table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="width: 100%; background-color: #FFF;">
			<tr>
			<td width="100%" style="width: 100%;">
			<![endif]-->
						<!-- Visually Hidden Preheader Text : BEGIN -->
						<div
							style="
								display: none;
								font-size: 1px;
								line-height: 1px;
								max-height: 0;
								max-width: 0;
								opacity: 0;
								overflow: hidden;
								mso-hide: all;
								font-family: 'Inter', sans-serif;
							"
						>
							Visitor's questions
						</div>
						<!-- Visually Hidden Preheader Text : END -->
						<!-- Create white space after the desired preview text so email clients don’t pull other distracting text into the inbox preview. Extend as necessary. -->
						<!-- Preview Text Spacing Hack : BEGIN -->
						<div
							style="
								display: none;
								font-size: 1px;
								line-height: 1px;
								max-height: 0;
								max-width: 0;
								opacity: 0;
								overflow: hidden;
								mso-hide: all;
								font-family: 'Inter', sans-serif;
							"
						>
							&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;
						</div>
						<!-- Preview Text Spacing Hack : END -->
	
						<!-- Email Body : BEGIN -->
	
						<table
							align="center"
							role="presentation"
							cellspacing="0"
							cellpadding="0"
							border="0"
							width="692"
							style="width: 692px; margin: 0 auto; text-align: center"
							class="email-container body-bg"
						>
							<tbody style="padding: 0 16px">
								<tr>
									<td align="center" valign="top">
										<table
											align="center"
											role="presentation"
											align="center"
											border="0"
											cellpadding="0"
											cellspacing="0"
											class="email-container"
											style="width: 660px; margin: 0 auto"
											width="660"
										>
											<tbody>
												<tr>
													<td
														align="center"
														width="100%"
														style="margin: 0 auto; width: 100%"
														class="mobile-padding-fix"
													>
														<table
															align="center"
															bgcolor="#c2f3ff"
															border="0"
															cellpadding="0"
															cellspacing="0"
															class="email-container content-bg"
															role="presentation"
															style="width: 660px; margin: 0 auto"
															width="660"
														>
															<tbody>
																<!--logoCenter-->
																<tr>
																	<td
																		class="header-block"
																		style="
																			padding: 10px 0;
																			border-bottom: 1px solid #000000;
																		"
																	>
																		<table
																			role="presentation"
																			style="width: 100%"
																			width="100%"
																			cellspacing="0"
																			cellpadding="0"
																			border="0"
																		>
																			<tbody>
																				<tr>
																					<td>
																						<a
																							href="https://yurii-kyrylovskyi.netlify.app"
																							style="
																								display: inline-block;
																								outline: none;
																								text-decoration: none;
																								text-align: left;
																							"
																							target="_blank"
																						>
																							<img
																								src="https://i.postimg.cc/tgkzKBvq/logo-email.png"
																								width="70"
																								height=""
																								class="logo-image"
																								border="0"
																								style="
																									width: 100%;
																									max-width: 70px;
																									height: auto;
																									display: block;
																								"
																								alt="Yurii Kyrylovskyi Logo"
																							/>
																						</a>
																					</td>
																					<td
																						style="
																							text-align: right;
																							overflow: hidden;
																						"
																						align="center"
																					>
																						<a
																							href="https://yurii-kyrylovskyi.netlify.app/contact-me"
																							nofollow
																							style="
																								display: inline-block;
																								font-size: 10px;
																								color: transparent;
																								text-decoration: none;
																							"
																						>
																							<table>
																								<tbody>
																									<tr>
																										<td>
																											<img
																												src="https://i.postimg.cc/Y9N4BTK7/link.png"
																												width="14"
																												height="15"
																												border="0"
																												style="
																													color: #000;
																													width: 100%;
																													max-width: 15px;
																													height: auto;
																													margin: 0 auto;
																													display: block;
																												"
																												class="g-img"
																												alt="Link to Yurii Kyrylovskyi website"
																											/>
																										</td>
																										<td>
																											<p
																												style="
																													font-family: 'Inter';
																													font-size: 14px;
																													font-style: normal;
																													font-weight: 400;
																													line-height: 160%;
																													color: #3c435e;
																													margin-left: 6px;
																												"
																											>
																												Yurii Kyrylovskyi
																											</p>
																										</td>
																									</tr>
																								</tbody>
																							</table>
																						</a>
																					</td>
																				</tr>
																			</tbody>
																		</table>
																	</td>
																</tr>
																<!--Main image-->
																<td>
																	<img
																		src="https://i.postimg.cc/1RCbnDJJ/flash-text.png"
																		class="main-image"
																		border="0"
																		style="
																			width: 100%;
																			max-width: 500px;
																			min-width: 280px;
																			height: auto;
																			display: block;
																			margin: 40px auto 50px;
																			aspect-ratio: 500 / 367;
																		"
																		alt="Yurii Kyrylovskyi Logo"
																	/>
																</td>
	
																<!-- Socials -->
																<tr
																	class="tr-socials"
																	style="
																		display: table-row;
																		border-top: 1px solid #000000;
																		border-bottom: 1px solid #000000;
																	"
																>
																	<td
																		style="
																			text-align: center;
																			display: block;
																			margin: 16px 0;
																		"
																	>
																		<div>
																			<a
																				href="https://www.linkedin.com/in/iurii-kyrylovskyi/"
																				style="
																					outline: none;
																					text-decoration: none;
																					display: inline-block;
																					margin: auto 0px;
																					max-width: 20px;
																				"
																				target="_blank"
																				rel="noopener noreferrer"
																			>
																				<img
																					src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/144px-LinkedIn_icon.svg.png?20210220164014"
																					class="social-image"
																					border="0"
																					style="
																						width: 100%;
																						max-width: 20px;
																						height: auto;
																						display: block;
																					"
																					alt="Yurii Kyrylovskyi linkedin"
																				/>
																			</a>
																			<span
																				style="display: inline-block; width: 16px"
																			></span>
																			<a
																				href="tg://resolve?domain=iurii712"
																				style="
																					outline: none;
																					text-decoration: none;
																					display: inline-block;
																					margin: auto 0px;
																					max-width: 22px;
																				"
																				target="_blank"
																				rel="noopener noreferrer"
																			>
																				<img
																					src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/1024px-Telegram_logo.svg.png"
																					border="0"
																					class="social-image"
																					style="
																						width: 100%;
																						max-width: 20px;
																						height: auto;
																						display: block;
																					"
																					alt="Yurii Kyrylovskyi telegram"
																				/>
																			</a>
																			<span
																				style="display: inline-block; width: 16px"
																			></span>
																			<a
																				href="tel:+380662053544"
																				style="
																					outline: none;
																					text-decoration: none;
																					display: inline-block;
																					margin: auto 0px;
																					max-width: 20px;
																				"
																				target="_blank"
																				rel="noopener noreferrer"
																			>
																				<img
																					src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Circle-icons-phone.svg/1024px-Circle-icons-phone.svg.png?20160314153756"
																					border="0"
																					class="social-image"
																					style="
																						width: 100%;
																						max-width: 20px;
																						height: auto;
																						display: block;
																					"
																					alt="Yurii Kyrylovskyi phone"
																				/>
																			</a>
																			<span
																				style="display: inline-block; width: 16px"
																			></span>
																			<a
																				href="mailto:iurii712@gmail.com"
																				style="
																					outline: none;
																					text-decoration: none;
																					display: inline-block;
																					margin: auto 0px;
																					max-width: 30px;
																				"
																			>
																				<img
																					src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Gmail_Icon_%282013-2020%29.svg/240px-Gmail_Icon_%282013-2020%29.svg.png"
																					class="social-image"
																					border="0"
																					style="
																						width: 100%;
																						max-width: 30px;
																						height: 20px;
																						display: block;
																					"
																					alt="Yurii Kyrylovskyi email"
																				/>
																			</a>
																		</div>
																	</td>
																</tr>
	
																<!-- Footer -->
																<tr
																	style="
																		display: block;
																		margin: 32px 0 10px;
																		text-align: center;
																	"
																>
																	<td
																		style="
																			display: inline-block;
																			max-width: 420px;
																			text-align: center;
																			font-family: 'Inter';
																			font-size: 12px;
																			font-style: normal;
																			font-weight: 400;
																			line-height: 160%;
																			color: #86878d;
																		"
																	>
																		Yurii Kyrylovskyi ${new Date().getFullYear()}
																		© All rights reserved
																	</td>
																</tr>
	
																<tr
																	style="
																		display: block;
																		margin: 0px 0 0px;
																		text-align: center;
																	"
																>
																	<td
																		style="
																			display: inline-block;
																			max-width: 420px;
																			text-align: center;
																			font-family: 'Inter';
																			font-size: 12px;
																			font-style: normal;
																			font-weight: 400;
																			line-height: 160%;
																			color: #86878d;
																		"
																	>
																		<a
																			href="https://yurii-kyrylovskyi.netlify.app"
																			style="
																				display: inline-block;
																				outline: none;
																				text-decoration: none;
																				text-align: left;
																			"
																			target="_blank"
																		>
																			<img
																				src="https://i.postimg.cc/tgkzKBvq/logo-email.png"
																				class="logo-image"
																				border="0"
																				style="
																					width: 100%;
																					max-width: 40px;
																					height: auto;
																					display: block;
																				"
																				alt="Yurii Kyrylovskyi Logo"
																			/>
																		</a>
																	</td>
																</tr>
															</tbody>
														</table>
													</td>
												</tr>
											</tbody>
										</table>
									</td>
								</tr>
							</tbody>
						</table>
					</center>
					<div style="background: #ffffff; height: 50px; width: 100%"></div>
				</body>
			</html>
		</body>
	</html>
	`;
};
