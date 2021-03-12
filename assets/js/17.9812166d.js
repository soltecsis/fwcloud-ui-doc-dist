(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{363:function(t,e,a){"use strict";a.r(e);var s=a(42),o=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),a("h2",{attrs:{id:"what-is-fwcloud"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-is-fwcloud"}},[t._v("#")]),t._v(" What is FWCloud")]),t._v(" "),a("p",[t._v("FWCloud is a web application that allows the centralized and secure administration of firewalls based on IPTables. It is an application in the cloud, which is essential to be able to use it from anywhere, at any time and with any device, but always with simple and secure access.")]),t._v(" "),a("p",[t._v("The application allows you to create logical groups of firewalls and firewall clusters together with their IP objects and VPN connections.\nYou can, for example, use one of these groups for each of your clients, or group all the firewalls at your company headquarters in them. We call these groups FWClouds and they are the reason for the application's name.")]),t._v(" "),a("p",[t._v("FWCloud arose from the need to accelerate an important task of our daily work at SOLTECSIS, the administration of Linux-based firewalls.")]),t._v(" "),a("p",[t._v("FWCloud uses the latest technologies, is accessible through a web interface and includes our most needed functionalities such as VPN connection management, QoS, routing and more.")]),t._v(" "),a("p",[t._v("FWCloud is an open source project under the GNU Affero General Public License v3.")]),t._v(" "),a("p",[t._v("FWCloud is our contribution to the OpenSource community, from which we have drawn so much and for which we have much to be thankful for.")]),t._v(" "),a("h2",{attrs:{id:"architecture"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#architecture"}},[t._v("#")]),t._v(" Architecture")]),t._v(" "),a("p",[t._v("FWCloud consist mainly of two modules, the user interface (FWCloud-UI) and the REST API (FWCloud-API), which handles all the actions requested by the user.")]),t._v(" "),a("p",[a("code",[t._v("(The Front-end) FWCloud-UI")])]),t._v(" "),a("p",[t._v("FWCloud-UI is the user interface that allows the user to manage the firewall clouds. It is a web interface accessible through browsers such as Chrome or Firefox, developed using the Angular framework thanks to which it has a desktop application behavior, even if it's ran within your web browser.")]),t._v(" "),a("p",[t._v("It is a fairly simple and intuitive application to manage for users accustomed to working with firewalls based on IPTables.")]),t._v(" "),a("p",[a("code",[t._v("(The Back-end) FWCloud-API")])]),t._v(" "),a("p",[t._v("FWCloud-API allows us to become independent of the user interface (FWCloud-UI) to perform its tasks. Its REST API provides the means to carry out all the actions allowed by FWCloud, such as managing firewalls, rules and IP objects, compiling/installing policies, managing VPNs, etc. Also, any action performed using the API will be reflected immediately in the user interface.")]),t._v(" "),a("p",[t._v("The REST API is developed in Node.JS, a server side Javascript environment based on events that executes code asynchronously, performing all the actions allowed by the application. It's possible to access the API directly without using FWCloud-UI to carry out automatic actions, such as blocking an IP address.")]),t._v(" "),a("p",[t._v("Other modules are:")]),t._v(" "),a("p",[a("code",[t._v("FWCloud-Websrv")])]),t._v(" "),a("p",[t._v("Web server for downloading FWCloud-UI and proxy API requests to FWCloud-API.")]),t._v(" "),a("p",[a("code",[t._v("FWCloud-Updater")])]),t._v(" "),a("p",[t._v("Its main purpose is allow the updating of the FWCloud-UI and FWCloud-API modules through FWCloud-UI. The update requests are forwarded from the FWCloud-API to the FWCloud-Updater")]),t._v(" "),a("p",[a("code",[t._v("FWCloud-Installer")])]),t._v(" "),a("p",[t._v("Script to install FWCloud in a simple and guided way. It allows you to install a complete FWCloud system in a matter of a few minutes.")]),t._v(" "),a("p",[t._v("The user accesses the FWCloud server by means of the URL, that was obtained during installation, through his web browser. At that time, the FWCloud-UI user interface starts downloading automatically.\nOnce the application is downloaded in the web browser, it begins to run, displaying the login screen. From this point on, any action that is performed in FWCloud-UI (for example, completing the login process) will be performed through the FWCloud-API which is accessed by FWCloud-UI.")]),t._v(" "),a("p",[a("img",{attrs:{src:t.$withBase("/assets/img/FWCloud-modules.png"),alt:"FWCloud Modules"}}),a("br")]),t._v(" "),a("h2",{attrs:{id:"installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),a("p",[t._v("FWCloud is an OpenSource project under the GNU Affero General Public License v3.")]),t._v(" "),a("p",[t._v("You can install it in your own servers, or alternatively, you can contact us to use our cloud service FWCloud.net to manage your firewall clouds.")]),t._v(" "),a("p",[t._v("We provide an installation script that will guide you in the process.")]),t._v(" "),a("p",[t._v("You can download FWCloud installation script using curl. If it is not in your system, please install it.")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -y\n")])])]),a("p",[t._v("Next you can run the following commands to run FWCloud-Installer:")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -k -s https://raw.githubusercontent.com/soltecsis/fwcloud-installer/main/fwcloud-installer.sh -o ./fwcloud-installer.sh \n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v(" ./fwcloud-installer.sh "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" -f ./fwcloud-installer.sh\n")])])]),a("p",[t._v("FWCloud-Installer will start the installation process, during which it will perform various checks to verify that your system meets all the requirements to install FWCloud, and among other things it will install the necessary packages, create the database, perform the necessary configurations and also will generate the self-signed TLS certificates.")]),t._v(" "),a("p",[t._v("The script will ask you some questions in case we want to customize our installation. For example, if your sever is behind a web proxy or not, or if you want to use TLS certificates, etc.")]),t._v(" "),a("p",[a("img",{attrs:{src:t.$withBase("/assets/img/installation-script.png"),alt:"Installation"}}),a("br")]),t._v(" "),a("p",[t._v("As a general rule, the default values for these questions are usually correct.")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("If you launch FWCloud-Installer on a server that already has a FWCloud installation, the script will try to update it. The update can be done from the user interface, therefore, it is not necessary to use the script for this task.")])]),t._v(" "),a("p",[t._v("Once the installation process has been successfully completed, you will be presented with a summary with the data that we have to use to access your newly installed FWCloud server.")]),t._v(" "),a("p",[a("img",{attrs:{src:t.$withBase("/assets/img/installation-complete.png"),alt:"Installation Complete"}}),a("br")]),t._v(" "),a("p",[t._v("Once the installation is complete, we can use the systemctl command to stop, start or view the status of the different services that are part of a FWCloud platform: FWCloud-Websrv, FWCloud-API and FWCloud-Updater.")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl status fwcloud-api\n● fwcloud-api.service – FWCloud-API\n  Loaded: loaded "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("/etc/systemd/system/fwcloud-api.service"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" disabled"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" vendor preset: enabled"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  Active: active "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("running"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" since Fri "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2019")]),t._v("-06-07 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),t._v(":58:01 UTC"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" 8s ago\nMain PID: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("14359")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   Tasks: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("limit: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1109")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  CGroup: /system.slice/fwcloud-api.service\n          └─14359 /usr/bin/node /opt/fwcloud-api/bin/www\n\nJun 07 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),t._v(":58:01 fwcloud-vm systemd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(": Started FWCloud-API.\n")])])]),a("p",[t._v("All you have to do now is use your favorite web browser to access the indicated URL using the default access data:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Customer code:")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("1")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Username:")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("fwcadmin")])]),t._v(" "),a("tr",[a("td",[t._v("Password:")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("fwcadmin")])])])]),t._v(" "),a("p",[a("img",{attrs:{src:t.$withBase("/assets/img/llogin.png"),alt:"Login"}}),a("br")]),t._v(" "),a("h2",{attrs:{id:"support-documentation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#support-documentation"}},[t._v("#")]),t._v(" Support / Documentation")]),t._v(" "),a("p",[t._v("Throughout this document we will give you full information about FWCloud-UI as well as references to video tutorial that will help you to understand how to use FWCloud and the most advisable use practices.")]),t._v(" "),a("p",[t._v("You can obtain more information visiting our "),a("a",{attrs:{href:"https://fwcloud.net/",target:"_blank",rel:"noopener noreferrer"}},[t._v("web site"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("There you will find a documentation section that includes more information, the last version of this manual and the complete collection of "),a("a",{attrs:{href:"https://fwcloud.net/en/documentation/user-interface/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Video Tutorials"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[a("img",{attrs:{src:t.$withBase("/assets/img/docs_web.png"),alt:"Web"}}),a("br")]),t._v(" "),a("p",[t._v("We invite you to subscribe to our "),a("a",{attrs:{href:"https://www.youtube.com/channel/UChO0Z9KP2ekRdXMowyyAfOA",target:"_blank",rel:"noopener noreferrer"}},[t._v("YouTube channel"),a("OutboundLink")],1),t._v(", which we update as we add new features to FWCloud.")]),t._v(" "),a("p",[t._v("You can get help and place any questions or suggestions you have in our "),a("a",{attrs:{href:"https://forum.fwcloud.net/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Forum"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("img",{attrs:{src:t.$withBase("/assets/img/forum.png"),alt:"Forum"}}),a("br")]),t._v(" "),a("p",[t._v("You are welcome to download the code and contribute to the FWCloud community from the "),a("a",{attrs:{href:"https://github.com/soltecsis",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github repositories"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("Also if you require any information please contact us by e-mail <&nbsp>"),a("img",{attrs:{src:t.$withBase("/assets/img/e-mail.png"),alt:"e-mail"}}),a("br"),t._v(" or using our contact form:")]),t._v(" "),a("p",[a("img",{attrs:{src:t.$withBase("/assets/img/contact-form.png"),alt:"Contact Form"}}),a("br")])])}),[],!1,null,null,null);e.default=o.exports}}]);