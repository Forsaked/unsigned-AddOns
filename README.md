This Repo provides two Files which provides the ability to disable the signing check of Firefox for AddOns.

This file belongs in following path to be functional:

  config.js -> C:\Program Files\Mozilla Firefox\ or C:\Program Files (x86)\Mozilla Firefox\
  config-prefs.js -> C:\Program Files\Mozilla Firefox\defaults\pref
  
You also need to edit the user.js or toogle following line in the about:config

  xpinstall.signatures.required = false

(A Restart of Firefox is required, to make this work!)
