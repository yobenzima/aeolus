/* eslint-disable no-unused-vars */

declare type SearchParamProps = {
  params: { [key: string]: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

// ========================================

declare type SignUpParams = {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  email: string;
  password: string;
};

declare type LoginUser = {
  email: string;
  password: string;
};

declare type User = {
  $id: string;
  email: string;
  userId: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
};

declare type NewUserParams = {
  userId: string;
  email: string;
  name: string;
  password: string;
};


declare type AccountCategory = {
  Id: string;
  PortfolioId: string;
  AccountTreeId: string;
  ParentId: string;
  SortIndex: number;
  Name: string;
  Description: string;
  SyncTS: number;
};

declare type CategoryCount = {
  name: string;
  count: number;
  totalCount: number;
};

declare type Account = {
  Id: string;
  PortfolioId: string;
  AccountTypeId: string;
  Code: string;
  Name: string;
  Description: string;
  Notes: string;
  CreateTS: Date;
  UpdateTS: Date;
  SyncTS: number;
};

declare type AccountCategoryLink = {
  Id: string;
  AccountCategoryId: string;
  AccountGroupId: string;
  SortIndex: number;
  BeginDate: Date;
  EndDate: Date;
  SyncTS: number;
};

declare type AccountGroup = {
  Id: string;
  PortfolioId: string;
  Name: string;
  Description: string;
  SyncTS: number;
};

declare type AccountGroupLink = {
  Id: string;
  AccountGroupId: string;
  AccountId: string;
  SortIndex: number;
  BeginDate: Date;
  EndDate: Date;
  SyncTS: number;
};

declare interface BankInfoProps {
  account: Account;
  appwriteItemId?: string;
  type: "full" | "card";
}

declare interface HeaderBoxProps {
  type?: "title" | "greeting";
  title: string;
  subtext: string;
  user?: string;
}

declare interface MobileNavProps {
  user: User;
}

declare interface PageHeaderProps {
  topTitle: string;
  bottomTitle: string;
  topDescription: string;
  bottomDescription: string;
  connectBank?: boolean;
}

declare interface PaginationProps {
  page: number;
  totalPages: number;
}

// declare type User = sdk.Models.Document & {
//   accountId: string;
//   email: string;
//   name: string;
//   items: string[];
//   accessToken: string;
//   image: string;
// };

declare interface AuthFormProps {
  type: "sign-in" | "sign-up";
}


declare interface FooterProps {
  user: User;
}


declare interface SiderbarProps {
  user: User;
}


declare interface CategoryBadgeProps {
  category: string;
}

declare interface TransactionTableProps {
  transactions: Transaction[];
}

declare interface CategoryProps {
  category: CategoryCount;
}

declare interface DoughnutChartProps {
  accounts: Account[];
}

// Actions
declare interface getAccountsProps {
  userId: string;
}

declare interface getOrganisationProps {
  organisationId: string;
}

declare interface signInProps {
  email: string;
  password: string;
}

declare interface getUserInfoProps {
  userId: string;
}

declare interface exchangePublicTokenProps {
  publicToken: string;
  user: User;
}