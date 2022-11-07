export interface InputFields {
    firstName: string;
    lastName: string;
    email: string;
    zipCode: number;
    states: {};
};

export interface NavBarProps {
    anchorElNav: HTMLElement | null;
    handleOpenNavMenu: (event: React.MouseEvent<HTMLElement>) => void;
    handleCloseNavMenu: () => void;
}