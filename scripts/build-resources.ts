import { $ } from "bun";
import { mkdir } from "node:fs/promises";
import { join } from "node:path";

const root = join(import.meta.dir, "..");
const buildDir = join(root, "build");

await mkdir(buildDir, { recursive: true });

const srcDir = join(root, "src");

await $`glib-compile-resources --sourcedir=${srcDir} --target=${join(buildDir, "hello-world.src.gresource")} ${join(srcDir, "org.gnome.HelloWorld.src.gresource.xml")}`;
await $`glib-compile-resources --sourcedir=${srcDir} --target=${join(buildDir, "hello-world.data.gresource")} ${join(srcDir, "org.gnome.HelloWorld.data.gresource.xml")}`;
