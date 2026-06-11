import Gio from "gi://Gio";
import GLib from "gi://GLib";
import { exit, programArgs, programInvocationName } from "system";

const root = GLib.getenv("HELLO_WORLD_ROOT") || GLib.get_current_dir();

for (const name of ["hello-world.src", "hello-world.data"]) {
  const path = GLib.build_filenamev([root, "build", `${name}.gresource`]);
  const resource = Gio.Resource.load(path);
  Gio.resources_register(resource);
}

globalThis.pkg = {
  initGettext() {},
  initFormat() {},
};

const { main } = await import("resource:///org/gnome/HelloWorld/js/main.js");
const exit_code = await main([programInvocationName, ...programArgs]);
exit(exit_code);
