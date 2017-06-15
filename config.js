//
try {
Components.utils.import("resource://gre/modules/addons/XPIProvider.jsm", {})
.eval("SIGNED_TYPES.clear()");
}
catch(ex) {}