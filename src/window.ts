import GObject from "gi://GObject";
import Adw from "gi://Adw?version=1";

export const HelloWorldWindow = GObject.registerClass(
  {
    GTypeName: "HelloWorldWindow",
    Template: "resource:///org/gnome/HelloWorld/window.ui",
    InternalChildren: ["main_label"],
  },
  class HelloWorldWindow extends Adw.ApplicationWindow {
    constructor(application: Adw.Application) {
      super({ application });
    }
  },
);
