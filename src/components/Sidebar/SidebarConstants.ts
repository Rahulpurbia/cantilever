import {
  OverviewIcon,
  TransactionsIcon,
  CardsIcon,
  InvoicesIcon,
  GoalsIcon,
  SettingsIcon,
} from "../../assets";
import { paths } from "../../utils/paths";

export const navMenuItems = [
  {
    title: "Overview",
    logo: OverviewIcon,
    href: paths.home,
  },
  {
    title: "Transactions",
    logo: TransactionsIcon,
    href: paths.transactions,
  },
  {
    title: "Cards",
    logo: CardsIcon,
    href: paths.cards,
  },
  {
    title: "Invoices",
    logo: InvoicesIcon,
    href: paths.invoices,
  },
  {
    title: "Goals",
    logo: GoalsIcon,
    href: paths.goals,
  },
  {
    title: "Settings",
    logo: SettingsIcon,
    href: paths.settings,
  },
];
