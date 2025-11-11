import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

export interface NavItem {
  label: string;
  href?: string;
  items?: { label: string; href: string; description?: string }[];
}

export interface NavigationBarProps {
  /** Array of navigation items */
  items: NavItem[];
  /** Logo element or text */
  logo?: React.ReactNode;
  /** Logo click handler */
  onLogoClick?: () => void;
  /** Additional actions to render on the right side */
  actions?: React.ReactNode;
  /** Additional className for the container */
  className?: string;
  /** Background color variant */
  variant?: "default" | "primary" | "transparent";
}

export const NavigationBar: React.FC<NavigationBarProps> = ({
  items,
  logo,
  onLogoClick,
  actions,
  className,
  variant = "default",
}) => {
  const containerClasses = cn(
    "w-full border-b px-4 py-3 flex items-center justify-between gap-4",
    {
      "bg-background": variant === "default",
      "bg-primary-blue text-white": variant === "primary",
      "bg-transparent": variant === "transparent",
    },
    className
  );

  return (
    <nav className={containerClasses}>
      {/* Logo Section */}
      {logo && (
        <div
          onClick={onLogoClick}
          className={cn("flex items-center gap-2", {
            "cursor-pointer": !!onLogoClick,
          })}
        >
          {logo}
        </div>
      )}

      {/* Navigation Menu */}
      <NavigationMenu className="flex-1">
        <NavigationMenuList>
          {items.map((item, index) => (
            <NavigationMenuItem key={index}>
              {item.items ? (
                <>
                  <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {item.items.map((subItem, subIndex) => (
                        <ListItem
                          key={subIndex}
                          title={subItem.label}
                          href={subItem.href}
                        >
                          {subItem.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </>
              ) : (
                <NavigationMenuLink
                  href={item.href}
                  className={navigationMenuTriggerStyle()}
                >
                  {item.label}
                </NavigationMenuLink>
              )}
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      {/* Actions Section */}
      {actions && <div className="flex items-center gap-2">{actions}</div>}
    </nav>
  );
};

// Helper component for dropdown items
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { title: string }
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none gap-1 rounded-md p-3 leading-none no-underline outline-hidden transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          {children && (
            <p className="text-muted-foreground line-clamp-2 text-sm leading-snug mt-1">
              {children}
            </p>
          )}
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
