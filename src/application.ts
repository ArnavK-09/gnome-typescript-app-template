import GObject from "gi://GObject";
import Gio from "gi://Gio";
import Adw from "gi://Adw?version=1";

import { HelloWorldWindow } from "./window.js";

export const HelloWorldApplication = GObject.registerClass(
  class HelloWorldApplication extends Adw.Application {
    constructor() {
      super({
        application_id: "org.gnome.HelloWorld",
        flags: Gio.ApplicationFlags.DEFAULT_FLAGS,
        resource_base_path: "/org/gnome/HelloWorld",
      });

      const quitAction = new Gio.SimpleAction({ name: "quit" });
      quitAction.connect("activate", () => this.quit());
      this.add_action(quitAction);
      this.set_accels_for_action("app.quit", ["<control>q"]);
    }

    vfunc_activate() {
      let { active_window } = this;

      if (!active_window) active_window = new HelloWorldWindow(this);

      active_window.present();
    }
  },
);
