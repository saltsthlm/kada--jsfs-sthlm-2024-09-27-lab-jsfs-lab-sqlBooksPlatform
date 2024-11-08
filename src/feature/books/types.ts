type Author = {
  name: string;
  id: number;
  bio: string;
};

type GetById = (id: string) => Promise<Author>;

export type AuthorService = {
  getById: GetById;
};
