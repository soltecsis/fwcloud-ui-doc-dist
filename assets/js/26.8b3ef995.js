(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{372:function(e,t,o){"use strict";o.r(t);var s=o(42),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"policy"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#policy"}},[e._v("#")]),e._v(" Policy")]),e._v(" "),o("h2",{attrs:{id:"security-policy"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#security-policy"}},[e._v("#")]),e._v(" Security Policy")]),e._v(" "),o("p",[e._v("FWCloud-UI allows you to create a "),o("code",[e._v("Security Policy")]),e._v(" in a graphical, intuitive and an easy to use web user interface.\nThe security policy is based on IPTables, so you will expect to find INPUT, OUTPUT and FORWARD chains, as well as SNAT and DNAT. You can configure the policy for IPv4 and for IPv6.")]),e._v(" "),o("p",[e._v("Out of the box, your firewall will have a scaffold with a minimum set of basic rules.")]),e._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[e._v("Don't forget IPv6")]),e._v(" "),o("p",[e._v("Remember that IPv6 is now functional in the majority of Linux based and Windows systems.\nSome installations that seams to be quite secured have security issues when related to IPv6.")]),e._v(" "),o("p",[e._v("When you create a new firewall using FWCloud-UI you will have the minimum rules configured.")])]),e._v(" "),o("p",[e._v("When you need to add a new rule, unfold the firewall group you want to add it to, unfold IPv4 or IPv6 policy group and select the appropriate chain: INPUT, OUTPUT, FORWARD, SNAT or DNAT.")]),e._v(" "),o("p",[e._v("On the policy panel you will see all the rules of that chain. Decide the position for the new rule. Right click on the leftmost side of the rule (that is, on the number of the rule) that occupies that position and select in the context menu "),o("code",[e._v("Create new rule above")]),e._v(" or "),o("code",[e._v("Create new rule below")]),e._v(" according to your criteria.")]),e._v(" "),o("p",[o("img",{attrs:{src:e.$withBase("/assets/img/rule_new.png"),alt:"Create Rule"}}),o("br")]),e._v(" "),o("p",[e._v("You will get a new rule added with "),o("code",[e._v("Any")]),e._v(" value in the many of its fields.")]),e._v(" "),o("p",[o("img",{attrs:{src:e.$withBase("/assets/img/rule_new_line.png"),alt:"New Rule"}}),o("br")]),e._v(" "),o("p",[e._v("To customize this rule according to its objective you just need to drag and drop elements on the fields. The majority of the operation in FWCloud-UI are done by drag and drop.")]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("Copy and Paste")]),e._v(" "),o("p",[e._v("Sometimes is easier making copy of a previous rule and modified it than create a new one.\nJust right click on the left side of the rule and select "),o("code",[e._v("Copy")]),e._v(". Then go to the right position, right click again an select "),o("code",[e._v("Paste above")]),e._v(" or "),o("code",[e._v("Paste below")]),e._v(".")]),e._v(" "),o("p",[e._v("It is possible too to select and copy several rules, not only one.")])]),e._v(" "),o("p",[e._v("When you modify the policy of a firewall, by adding or changing any rule, two new icons appear next to the firewall name.")]),e._v(" "),o("p",[e._v("The orange "),o("img",{attrs:{src:e.$withBase("/assets/img/C.png"),alt:"C"}}),e._v(" indicates the new policy needs to be compiled, and the "),o("img",{attrs:{src:e.$withBase("/assets/img/I.png"),alt:"I"}}),e._v(" that it also needs to be installed in the target firewall.")]),e._v(" "),o("h2",{attrs:{id:"policy-rules"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#policy-rules"}},[e._v("#")]),e._v(" Policy Rules")]),e._v(" "),o("h3",{attrs:{id:"rules"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#rules"}},[e._v("#")]),e._v(" Rules")]),e._v(" "),o("p",[e._v("The security policy is composed of firewall rules. In FWCloud-UI any rule is graphically represented as row in a table. The columns of the table are the fields of the rule.")]),e._v(" "),o("p",[o("img",{attrs:{src:e.$withBase("/assets/img/empty_rule.png"),alt:"Create Rule"}}),o("br")]),e._v(" "),o("p",[e._v("When you need to add a new rule, unfold the firewall group you want to add it to, unfold IPv4 or IPv6 policy group and select the appropriate chain: INPUT, OUTPUT, FORWARD, SNAT or DNAT.")]),e._v(" "),o("p",[e._v("Not all rules have the same fields, depending on the firewall chain you are creating the rule. FWCloud-UI only allow you to fill in the appropriate fields.")]),e._v(" "),o("p",[e._v("In order to focus on relevant parts of the rules you can hide same of the fields showed on the grid. By clicking on the gear icon  "),o("img",{attrs:{src:e.$withBase("/assets/img/blue_gear.png"),alt:"Gear Icon"}}),e._v("  that is on the top of the rules table at the right,")]),e._v(" "),o("p",[o("img",{attrs:{src:e.$withBase("/assets/img/hide_columns-icon.png"),alt:"Hide Columns Icon"}}),o("br")]),e._v(" "),o("p",[e._v("you can access the grid settings menu and control which fields have to be displayed or not.")]),e._v(" "),o("p",{attrs:{align:"center"}},[o("img",{attrs:{src:e.$withBase("/assets/img/grid_settings-menu.png"),alt:"Grid Settings Menu",width:"65%",height:"65%"}})]),o("br"),e._v(" "),o("p",[e._v("Some fields are mandatory an other not, like "),o("code",[e._v("Apply to")]),e._v(" or "),o("code",[e._v("Comments")]),e._v(". The fields depend on the kind of rule.")]),e._v(" "),o("p",[e._v("On the table fields you can drag and drop interfaces, IP addresses, networks, prefix, etc. Check "),o("RouterLink",{attrs:{to:"/docs/Sections/Objects/"}},[e._v(" Objects ")]),e._v(" section to know the kind of objects that can be used in a rule.")],1),e._v(" "),o("h3",{attrs:{id:"create-new-rule"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#create-new-rule"}},[e._v("#")]),e._v(" Create new rule")]),e._v(" "),o("p",[e._v("In order to create a new rule go to the corresponding firewall and expand it by clicking on the "),o("code",[e._v(">")]),e._v(" symbol. You can create rules for IPv4 and IPv6 protocols. Expand the protocol and select one of the showed chains (INPUT, OUTPUT, FORWARD, SNAT, DNAT) The Policy panel will be changed to show all the current rules of that chain. Now decide the position for the new rule. Right click on the leftmost side of the rule (that is, on the number of the rule) that occupies that position and select "),o("code",[e._v("Create new rule above")]),e._v(" or "),o("code",[e._v("Create new rule below")]),e._v(" according to your criteria.")]),e._v(" "),o("p",[o("img",{attrs:{src:e.$withBase("/assets/img/rule_new.png"),alt:"Create Rule"}}),o("br")]),e._v(" "),o("p",[e._v("You will get a new rule added with "),o("code",[e._v("Any")]),e._v(" value in most of its fields. This is kind of template for the new rule, you will need to customize this rule according to its objectives. Now just drag and drop elements on these fields. The majority of the operation in FWCloud-UI are done by drag and drop.")]),e._v(" "),o("h3",{attrs:{id:"compose-rule"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#compose-rule"}},[e._v("#")]),e._v(" Compose rule")]),e._v(" "),o("p",[e._v("A FWCloud rule is composed by drag and drop elements from the left panel of the FWCloud-UI to the proper box of the rule. For instance, let's suppose you start from a fresh new rule like this:")]),e._v(" "),o("p",[o("img",{attrs:{src:e.$withBase("/assets/img/rule_new_line.png"),alt:"Create Rule"}}),o("br")]),e._v(" "),o("p",[e._v("and you want to add the interface "),o("code",[e._v("eth0 [LAN]")]),e._v(" in the "),o("code",[e._v("In")]),e._v(" field. Just click on "),o("code",[e._v("eth0 [LAN]")]),e._v(", drag it ...")]),e._v(" "),o("p",[o("img",{attrs:{src:e.$withBase("/assets/img/dragDrop1-new.png"),alt:"Create Rule"}}),o("br")]),e._v(" "),o("p",[e._v("and drop it in the "),o("code",[e._v("In")]),e._v(" box,")]),e._v(" "),o("p",[o("img",{attrs:{src:e.$withBase("/assets/img/dragDrop2-new.png"),alt:"Create Rule"}}),o("br")]),e._v(" "),o("p",[e._v("then continue with "),o("code",[e._v("eth1 [WAN]")]),e._v(" in the "),o("code",[e._v("Out")]),e._v(" field ...")]),e._v(" "),o("p",[o("img",{attrs:{src:e.$withBase("/assets/img/dragDrop3-new.png"),alt:"Create Rule"}}),o("br")]),e._v(" "),o("p",[e._v("and the rest of the fields ...")]),e._v(" "),o("p",[o("img",{attrs:{src:e.$withBase("/assets/img/dragDrop4-new.png"),alt:"Create Rule"}}),o("br")]),e._v(" "),o("p",[e._v("until the rule is exactly as you want it:")]),e._v(" "),o("p",[o("img",{attrs:{src:e.$withBase("/assets/img/dragDrop5.png"),alt:"Create Rule"}}),o("br")]),e._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[e._v("Important note")]),e._v(" "),o("p",[e._v("In order to avoid creating a rule than could lead to an incorrect policy, FWCloud-UI detects when you are adding and empty group, that is, a group with no elements in it.")]),e._v(" "),o("p",[o("img",{attrs:{src:e.$withBase("/assets/img/empty-group-error.png"),alt:"Empty group error"}}),o("br")])]),e._v(" "),o("h3",{attrs:{id:"select-rules"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#select-rules"}},[e._v("#")]),e._v(" Select rules")]),e._v(" "),o("p",[e._v("To select a rule just click on the rule number on the left. Multiple selection is possible. To select a group of contiguous rules click on the first rule and then holding the shift key click on the last rule of the range. To select a group of rules individually hold the control key when selecting the rules. Rules selected have a gray background color on the number of the rule.")]),e._v(" "),o("p",[e._v("In the next figure, rules with id 5, 7 and 8 are selected, while rule 6 is not")]),e._v(" "),o("p",[o("img",{attrs:{src:e.$withBase("/assets/img/rules-selected.png"),alt:"Multiple rules selected"}}),o("br")]),e._v(" "),o("h3",{attrs:{id:"edit-rule"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#edit-rule"}},[e._v("#")]),e._v(" Edit rule")]),e._v(" "),o("p",[e._v("Some rules can need options that cannot be accomplished by drag and drop. In these cases right click the number of the rule and select "),o("code",[e._v("Edit rule")]),e._v(" or just double click on the number of the rule")]),e._v(" "),o("p",[o("img",{attrs:{src:e.$withBase("/assets/img/rule_edit.png"),alt:"Rule Edit"}}),o("br")]),e._v(" "),o("p",[e._v("Editing a rule allow you to modify its properties")]),e._v(" "),o("p",[o("img",{attrs:{src:e.$withBase("/assets/img/rule_options.png"),alt:"Rule Options"}}),o("br")]),e._v(" "),o("p",[e._v('Here you can set if an individual rule takes into account the state of the connections with matching the packets or not. FWCLoud-UI configures all rules as stateful if the "Stateful firewall" is set on the firewall options (this is the default), otherwise the rules are stateless.')]),e._v(" "),o("p",[e._v("Also can be activated the log of the packets that are matched by this rule. The output of the log is registered in syslog prefixed by the rule number. When the log is set, a rate limit of 60/minute is applied to the rule.")]),e._v(" "),o("p",[e._v("When the options of a rule are modified a small gear icon "),o("img",{attrs:{src:e.$withBase("/assets/img/gear-icon.png"),alt:"Gear icon"}}),e._v(" appears by the rule number.")]),e._v(" "),o("h3",{attrs:{id:"rule-scripts"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#rule-scripts"}},[e._v("#")]),e._v(" Rule scripts")]),e._v(" "),o("p",[e._v('We can make the policy rules to launch scripts. We call them "Hook scripts". They can be executed before or/and after the rule is loaded into the firewall. To associate them to a rule we just need to edit the rule an write the commands we want to be invoked in the proper text box.')]),e._v(" "),o("p",[o("img",{attrs:{src:e.$withBase("/assets/img/hook_scripts.png"),alt:"Rule Options"}}),o("br")]),e._v(" "),o("p",[e._v("Here we can put any shell command or executable file. These text fields are limited to 65000 characters, for more structured scripts it is better to write them in a separate file. The commands detailed here will be executed by the user employed to load the policy.")]),e._v(" "),o("p",[e._v('This feature is very important to be able to employ FWCloud in conjunction with other programs that also modify the system secure policy. For example we can make fail2ban ban an IP address right before loading a particular rule that allows ssh traffic, just adding "/usr/bin/fail2ban set sshd banip 23.34.45.56" in that rule.')]),e._v(" "),o("p",[e._v("If we want to load a bunch of iptables rules before the FWCloud policy we can write them in a script file and associate it to the Before-hook-script of the first rule of FWCloud.")]),e._v(" "),o("p",[e._v("We have to take into account that when the security policy is loaded, all the previous security rules are replaced by the new ones detailed in FWCloud-UI.")]),e._v(" "),o("p",[e._v("When a rule has associated scripts, it is graphically represented by an "),o("img",{attrs:{src:e.$withBase("/assets/img/hook_script-icon.png"),alt:"Hook script icon"}}),e._v(" icon next to the rule number. Also if we hover the mouse over this icon we a pop up messages show us this rules has scripts.")]),e._v(" "),o("img",{attrs:{src:e.$withBase("/assets/img/hook_script-msg.png"),alt:"Hook script message"}}),e._v(" "),o("p",[e._v("The scripts are also shown when we "),o("RouterLink",{attrs:{to:"/docs/Sections/Policy/#compile-rule"}},[e._v(" compile ")]),e._v(" the rule. Next there is an example of a rule executing two scripts:")],1),e._v(" "),o("img",{attrs:{src:e.$withBase("/assets/img/hook_script-compile.png"),alt:"Hook script compilation"}}),e._v(" "),o("p",[e._v("You can watch the next video to see a small demo about hook scripts:")]),e._v(" "),o("iframe",{attrs:{width:"740",height:"475",src:"https://www.youtube.com/embed/ojMUh2NDEqY",frameborder:"0",allow:"autoplay; encrypted-media",allowfullscreen:""}}),e._v(" "),o("h3",{attrs:{id:"hook-script-rule"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#hook-script-rule"}},[e._v("#")]),e._v(" Hook script rule")]),e._v(" "),o("p",[e._v("To give a more visual approach, it also possible to create script rules. We write the script code directly on the rule itself.")]),e._v(" "),o("img",{attrs:{src:e.$withBase("/assets/img/hook_script-rule.png"),alt:"Hook script rule"}}),e._v(" "),o("p",[e._v("These are special rules that only contain the script code and optionally a comment.")]),e._v(" "),o("p",[e._v('They can be created in any firewall chain for both IPv4 and IPv6. For this in the menu we have 2 new options:\n"Create new script rule above"\nand "Create new script rule below"')]),e._v(" "),o("img",{attrs:{src:e.$withBase("/assets/img/hook_script-menu.png"),alt:"Hook script menu"}}),e._v(" "),o("p",[e._v("The appearance of the rules is slightly different from the policy rules but they keep the "),o("img",{attrs:{src:e.$withBase("/assets/img/hook_script-icon.png"),alt:"Hook script icon"}}),e._v(" icon to indicate that they contain a script. These rules cannot be edited by double clicking on it, since the code is entered directly. The rest of the options of the rules are maintained. We can also, for example, highlight it like any other rule by modifying its color.")]),e._v(" "),o("img",{attrs:{src:e.$withBase("/assets/img/hook_script-change-color.png"),alt:"Hook script color change"}}),e._v(" "),o("p",[e._v("With these rules we see exactly when the script is going to be executed and it is also not necessary to edit the rule to see the code.")]),e._v(" "),o("p",[e._v("This makes it easier to read the policy rules and hook scripts together.")]),e._v(" "),o("p",[e._v("Here there is a short video about this new rules:")]),e._v(" "),o("iframe",{attrs:{width:"740",height:"475",src:"https://www.youtube.com/embed/DtqJJEBm8g4",frameborder:"0",allow:"autoplay; encrypted-media",allowfullscreen:""}}),e._v(" "),o("h3",{attrs:{id:"copy-rule"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#copy-rule"}},[e._v("#")]),e._v(" Copy rule")]),e._v(" "),o("p",[e._v("When composing or modifying a rule you can copy the objects from the rules you previously have and paste them in the new field.")]),e._v(" "),o("p",[e._v("Also for your convenience you can make a copy of a rule, right click on the number of the rule, select "),o("code",[e._v("Copy")]),e._v(" and then right click the number of another rule and select "),o("code",[e._v("Paste above")]),e._v(" or "),o("code",[e._v("Paste below")]),e._v(" from the context menus.")]),e._v(" "),o("p",[o("img",{attrs:{src:e.$withBase("/assets/img/rule_copy.png"),alt:"Copy Rule"}}),o("br")]),e._v(" "),o("p",[e._v("This action can be done in more than one rule if you keep them selected.")]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("Shortcut")]),e._v(" "),o("p",[e._v("Rules can be copied to the clipboard using the shortcut "),o("code",[e._v("Ctrl + C")]),e._v(" and pasted from the clipboard BELOW the last selected rule with "),o("code",[e._v("Ctrl + V")]),e._v(", or pasted ABOVE the first selected rule using "),o("code",[e._v("Ctrl + Shift + V")])])]),e._v(" "),o("p",[e._v("When a rule or rules have been copied to the clipboard a small icon "),o("img",{attrs:{src:e.$withBase("/assets/img/rule_copy-icon.png"),alt:"Copy Rule Icon"}}),e._v(" appears at the bottom of the policy panel. If you click on it you can see the messages indicating the number of rules copied. You can removed them from the clipboard by clicking on the litter bin icon of the message.")]),e._v(" "),o("p",[o("img",{attrs:{src:e.$withBase("/assets/img/rule_copy-msg.png"),alt:"Copy Rule Msg"}}),o("br")]),e._v(" "),o("h3",{attrs:{id:"cut-rule"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#cut-rule"}},[e._v("#")]),e._v(" Cut rule")]),e._v(" "),o("p",[e._v("In order to sort your rules you can cut a rule and paste on another position. This can be done by selecting "),o("code",[e._v("Cut")]),e._v(" and then "),o("code",[e._v("Paste above")]),e._v(" or "),o("code",[e._v("Paste below")]),e._v(" from the context menu of the rules.")]),e._v(" "),o("p",[o("img",{attrs:{src:e.$withBase("/assets/img/rule_cut.png"),alt:"Cut Rule"}}),o("br")]),e._v(" "),o("p",[e._v("Also multiple selection of rules is allowed for this action.")]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("Shortcut")]),e._v(" "),o("p",[o("code",[e._v("Ctrl + X")]),e._v(" : Cut the selected rules to the clipboard")])]),e._v(" "),o("p",[e._v("Once the rule or rules are cut you can see a "),o("img",{attrs:{src:e.$withBase("/assets/img/rule_copy-icon-red.png"),alt:"Copy Rule Icon"}}),e._v("\nred icon. If you click on it you can see the rules that are cut and pending to be copied")]),e._v(" "),o("img",{attrs:{src:e.$withBase("/assets/img/rule_copy-msg-red.png"),alt:"Copy Rule Icon"}}),e._v(" "),o("h3",{attrs:{id:"move-rule"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#move-rule"}},[e._v("#")]),e._v(" Move rule")]),e._v(" "),o("p",[e._v("Rules can be moved in order to compose the secure policy. To move a rule right click on the number of the rule, select "),o("code",[e._v("Move above")]),e._v(" or "),o("code",[e._v("Move below")]),e._v(" until the rules gets it right place.")]),e._v(" "),o("p",[o("img",{attrs:{src:e.$withBase("/assets/img/rule_move_up.png"),alt:"Move Rule"}}),o("br")]),e._v(" "),o("p",[e._v("You can do it with multiple rules if the are selected.")]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("Shortcuts")]),e._v(" "),o("p",[o("code",[e._v("Ctrl + Up_Arrow")]),e._v(" : Move the rules above the first selected rule")]),e._v(" "),o("p",[o("code",[e._v("Ctrl + Down_Arrow")]),e._v(" : Move the rules after the last selected rule")])]),e._v(" "),o("h3",{attrs:{id:"change-rule-color"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#change-rule-color"}},[e._v("#")]),e._v(" Change rule color")]),e._v(" "),o("p",[e._v("To better distinguish one rules from others or which part of the policy they affect, the background color of these can be modified.")]),e._v(" "),o("p",[o("img",{attrs:{src:e.$withBase("/assets/img/rule_color.png"),alt:"Rule Color"}}),o("br")]),e._v(" "),o("p",[e._v("You can modify the color using the color picker form. The most used colors will be remembered in order of\nuse, to make it easy to reuse a previous used color")]),e._v(" "),o("p",[o("img",{attrs:{src:e.$withBase("/assets/img/color_picker.png"),alt:"Color Picker"}}),o("br")]),e._v(" "),o("p",[e._v("It is possible to change the color of multiple rules at the same time.")]),e._v(" "),o("h3",{attrs:{id:"delete-rule"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#delete-rule"}},[e._v("#")]),e._v(" Delete rule")]),e._v(" "),o("p",[e._v("If you thing a rule is not going to be needed it can be removed from the policy. Right click on the rule number and select "),o("code",[e._v("Delete rule")]),e._v(".")]),e._v(" "),o("p",[o("img",{attrs:{src:e.$withBase("/assets/img/rule_delete.png"),alt:"Move Rule"}}),o("br")]),e._v(" "),o("p",[e._v("Multiple selection of rules can be done for this action.")]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("Shortcut")]),e._v(" "),o("p",[o("code",[e._v("Del")]),e._v(" : Asks for confirmation and deletes the selected rules")])]),e._v(" "),o("h3",{attrs:{id:"disable-rule"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#disable-rule"}},[e._v("#")]),e._v(" Disable rule")]),e._v(" "),o("p",[e._v("Sometimes you want temporarily disable a rule but not deleted. Right click on the rule number and select "),o("code",[e._v("Disable rule")]),e._v(".")]),e._v(" "),o("p",[o("img",{attrs:{src:e.$withBase("/assets/img/rule_disable.png"),alt:"Disable Rule"}}),o("br")]),e._v(" "),o("p",[e._v("When a rule is disabled it is blurred and a white cross over red background appears by the rule number.")]),e._v(" "),o("p",[o("img",{attrs:{src:e.$withBase("/assets/img/rule_disabled.png"),alt:"Disabled Rule"}}),o("br")]),e._v(" "),o("p",[e._v("To re-enable the rule again select "),o("code",[e._v("Enable rule")]),e._v(" in the context menu.")]),e._v(" "),o("p",[e._v("You can disable or enable all the rules that are selected.")]),e._v(" "),o("h3",{attrs:{id:"compile-rule"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#compile-rule"}},[e._v("#")]),e._v(" Compile rule")]),e._v(" "),o("p",[e._v("When creating your secure policy if you want to known beforehand how a rule will look like in IPTables or NFTables format when installed in your firewall, right click the number of the rule, select "),o("code",[e._v("Compile selected rule")]),e._v(" and then "),o("code",[e._v("IPTables format")]),e._v(" or "),o("code",[e._v("NFTables format")]),e._v(" according to your preferences.")]),e._v(" "),o("p",[o("img",{attrs:{src:e.$withBase("/assets/img/rule_compile-iptables.png"),alt:"Compile Rule"}}),o("br")]),e._v(" "),o("p",[e._v("If you have clicked on "),o("code",[e._v("IPTables format")]),e._v(" a pop up windows will show the rule compiled for IPTables:")]),e._v(" "),o("p",[o("img",{attrs:{src:e.$withBase("/assets/img/rule_compile-form-iptables.png"),alt:"Compile Rule IPTables Format"}}),o("br")]),e._v(" "),o("p",[e._v("or compiled for "),o("code",[e._v("NFTables format")]),e._v(" in the other case:")]),e._v(" "),o("p",[o("img",{attrs:{src:e.$withBase("/assets/img/rule_compile-form-nftables.png"),alt:"Compile Rule NFTables Format"}}),o("br")]),e._v(" "),o("h3",{attrs:{id:"groups"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#groups"}},[e._v("#")]),e._v(" Groups")]),e._v(" "),o("p",[e._v("In order to organize the secure policy you can put rules into groups. First you need to create a group. A group is created from a rule than will go into it. Right click that rule and select "),o("code",[e._v("Create group")]),e._v(".")]),e._v(" "),o("p",[o("img",{attrs:{src:e.$withBase("/assets/img/rule_group_new.png"),alt:"New Group"}}),o("br")]),e._v(" "),o("p",[e._v("And fill the form with the name of the group.")]),e._v(" "),o("p",[o("img",{attrs:{src:e.$withBase("/assets/img/group_name.png"),alt:"Group Form"}}),o("br")]),e._v(" "),o("p",[e._v("By anytime you can rename a group of rules by editing it.")]),e._v(" "),o("p",[o("img",{attrs:{src:e.$withBase("/assets/img/group_edit.png"),alt:"Edit Group"}}),o("br")]),e._v(" "),o("p",[e._v("In order to add a rule to the group move it until is next to the group. Then right click on the rule number and select "),o("code",[e._v("Move to the group above")]),e._v(" or "),o("code",[e._v("Move to the group below")]),e._v(".")]),e._v(" "),o("p",[o("img",{attrs:{src:e.$withBase("/assets/img/group_in.png"),alt:"Add Rule in a Group"}}),o("br")]),e._v(" "),o("p",[e._v("If a rule needs to be out of a group, right click and select "),o("code",[e._v("Remove them from group")]),e._v(".")]),e._v(" "),o("p",[o("img",{attrs:{src:e.$withBase("/assets/img/group_out.png"),alt:"Remove Rule from a Group"}}),o("br")]),e._v(" "),o("p",[e._v("The groups can be collapsed or expanded to the display the rules inside them. Also you can change the color of the group in order to visually separate one group from another.")]),e._v(" "),o("p",[o("img",{attrs:{src:e.$withBase("/assets/img/group_color.png"),alt:"Color Group"}}),o("br")]),e._v(" "),o("p",[o("img",{attrs:{src:e.$withBase("/assets/img/hostInARule.png"),alt:"Group Color Example"}}),o("br")]),e._v(" "),o("p",[e._v("If a group is not longer needed, it can be deleted.")]),e._v(" "),o("p",[o("img",{attrs:{src:e.$withBase("/assets/img/group_delete.png"),alt:"Delete Group"}}),o("br")]),e._v(" "),o("h2",{attrs:{id:"shortcuts"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#shortcuts"}},[e._v("#")]),e._v(" Shortcuts")]),e._v(" "),o("p",[e._v("After selecting one or more rules, the following keyboard shortcuts can be used:")]),e._v(" "),o("table",[o("thead",[o("tr",[o("th",[e._v("Shortcut")]),e._v(" "),o("th",{staticStyle:{"text-align":"left"}},[e._v("Description")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[e._v("Ctrl + C")]),e._v(" "),o("td",{staticStyle:{"text-align":"left"}},[e._v("Copy the rules to  the clipboard")])]),e._v(" "),o("tr",[o("td",[e._v("Ctrl + X")]),e._v(" "),o("td",{staticStyle:{"text-align":"left"}},[e._v("Cut rules to clipboard")])]),e._v(" "),o("tr",[o("td",[e._v("Ctrl + V")]),e._v(" "),o("td",{staticStyle:{"text-align":"left"}},[e._v("Paste the rules from the clipboard BELOW the last selected rule")])]),e._v(" "),o("tr",[o("td",[e._v("Ctrl + Shift + V")]),e._v(" "),o("td",{staticStyle:{"text-align":"left"}},[e._v("Paste the rules from the clipboard ABOVE the first selected rule")])]),e._v(" "),o("tr",[o("td",[e._v("Del")]),e._v(" "),o("td",{staticStyle:{"text-align":"left"}},[e._v("Asks for confirmation and deletes the selected rules")])]),e._v(" "),o("tr",[o("td",[e._v("Ctrl + Up_Arrow")]),e._v(" "),o("td",{staticStyle:{"text-align":"left"}},[e._v("Move the rules above the first selected rule")])]),e._v(" "),o("tr",[o("td",[e._v("Ctrl + Down_Arrow")]),e._v(" "),o("td",{staticStyle:{"text-align":"left"}},[e._v("Move the rules after the last selected rule")])])])]),e._v(" "),o("h2",{attrs:{id:"load-policy"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#load-policy"}},[e._v("#")]),e._v(" Load Policy")]),e._v(" "),o("p",[e._v("In order to load the secure policy into a firewall you need to compile it (visit "),o("RouterLink",{attrs:{to:"/docs/Sections/Firewalls/#compile"}},[e._v(" Compile firewall ")]),e._v(" section) and then install it (visit "),o("RouterLink",{attrs:{to:"/docs/Sections/Firewalls/#install"}},[e._v(" Install firewall ")]),e._v(" section).")],1),e._v(" "),o("p",[e._v("The policy will take effect immediately after installed into the firewall.")])])}),[],!1,null,null,null);t.default=r.exports}}]);