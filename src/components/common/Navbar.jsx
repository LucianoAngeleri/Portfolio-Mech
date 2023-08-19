import { Fragment } from "react";
import { CubeTransparentIcon, Bars3Icon, XMarkIcon, BellIcon } from "@heroicons/react/24/solid";
import { Disclosure, Menu, Transition } from "@headlessui/react";

const linksNavegacion = [
    { name: "Acerca de Mi", href: "#seccionAcerca", current: false },
    { name: "CV", href: "#seccionCV", current: false },
    { name: "Proyectos", href: "#seccionProyectos", current: false },
    { name: "Tecnolgías", href: "#seccionTecnolgias", current: false },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}
const Navbar = () => {
    return (
        <header className="w-full fixed top-0 shadow-xl bg-primary text-light z-10">
            <Disclosure as="nav">
                {({ open }) => (
                    <>
                        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                            <div className="relative flex items-center justify-between">
                                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                    <Disclosure.Button className="sm:hidden inline-flex items-center justify-center rounded-md p-2 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                        {open ? (
                                            <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>
                                </div>
                                <div className="flex items-center justify-center m-auto md:m-0">
                                    <div className="flex items-center gap-1 flex-col p-3">
                                        <CubeTransparentIcon className="h-8 w-auto" />
                                        <span className="font-display font-bold">Luciano Angeleri</span>
                                    </div>
                                    <div className="hidden my-auto sm:ml-6 sm:block">
                                        <ul className="flex gap-3 items-center">
                                            {linksNavegacion.map((item) => (
                                                <li key={item.name}>
                                                    <a
                                                        href={item.href}
                                                        className={classNames(
                                                            item.current
                                                                ? "bg-gray-900 text-white"
                                                                : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                                            "rounded-md px-3 py-2 text-sm font-medium"
                                                        )}
                                                        aria-current={item.current ? "page" : undefined}>
                                                        {item.name}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Disclosure.Panel className="sm:hidden">
                            <div className="p-3 rounded-lg">
                                {linksNavegacion.map((item) => (
                                    <Disclosure.Button
                                        key={item.name}
                                        as="a"
                                        href={item.href}
                                        className={classNames(
                                            item.current ? "border-2 text-light" : "hover:text-white",
                                            "block rounded-lg px-3 py-2"
                                        )}
                                        aria-current={item.current ? "page" : undefined}>
                                        {item.name}
                                    </Disclosure.Button>
                                ))}
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </header>
    );
};

export default Navbar;
