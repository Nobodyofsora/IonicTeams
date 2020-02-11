export interface Team {
  id: number; //Position
  country: string;
  alternate_name?: any;
  fifa_code: string;
  group_id: number;
  group_letter: string;
  wins: number; //R
  draws: number;
  losses: number; //R
  games_played: number; //PG
  points: number; //P
  goals_for: number;
  goals_against: number;
  goal_differential: number;
}

export interface Placement {
  id: number;
  letter: String;
  ordered_teams: Array<Team>;
}
