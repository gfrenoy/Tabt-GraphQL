import {
  BaseEntity,
  Column,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  RelationId
} from 'typeorm';
import {Field, ID, ObjectType} from 'type-graphql';
import {Division} from './division';
import {ClubTeam} from './club-team';
import {Club} from './club';
import {MatchInfo} from './matchInfo';
import {PlayerInfo} from './player-info';

@ObjectType()
@Entity('divisionresults', {schema: 'tabt'})
@Index('match_id', ['match_id'])
export class MatchResult {

  @Field(() => Division)
  @Column({
    name: 'div_id'
  })
  div_id: number;

  @Column('tinyint', {
    nullable: false,
    default: () => "'0'",
    name: 'season'
  })
  season: number;

  @Field()
  @Column('tinyint', {
    nullable: false,
    unsigned: true,
    default: () => "'0'",
    name: 'week'
  })
  week: number;

  @Column('tinyint', {
    nullable: false,
    unsigned: true,
    default: () => "'0'",
    name: 'match_nb'
  })
  match_nb: number;

  @Field()
  @Column('tinyint', {
    nullable: false,
    unsigned: true,
    default: () => "'0'",
    name: 'home'
  })
  homeScore: number;

  @Field()
  @Column('tinyint', {
    nullable: false,
    unsigned: true,
    default: () => "'0'",
    name: 'away'
  })
  awayScore: number;

  @Field()
  @Column('tinyint', {
    nullable: false,
    unsigned: true,
    default: () => "'0'",
    name: 'sets_home'
  })
  homeSets: number;

  @Field()
  @Column('tinyint', {
    nullable: false,
    unsigned: true,
    default: () => "'0'",
    name: 'sets_away'
  })
  awaySets: number;

  @Field(() => ID)
  @PrimaryColumn('int', {
    nullable: false,
    unsigned: true,
    default: () => "'0'",
    name: 'match_id'
  })
  match_id: number;

  @Column('enum', {
    nullable: false,
    default: () => "'N'",
    enum: ['N', 'Y'],
    name: 'home_wo'
  })
  home_wo: string;

  @Column('enum', {
    nullable: false,
    default: () => "'N'",
    enum: ['N', 'Y'],
    name: 'away_wo'
  })
  away_wo: string;

  @Column('enum', {
    nullable: false,
    default: () => "'N'",
    enum: ['Y', 'N'],
    name: 'score_modified'
  })
  score_modified: string;

  @Column('timestamp', {
    nullable: true,
    name: 'validation_timestamp'
  })
  validation_timestamp: Date | null;

  @Column('int', {
    nullable: true,
    unsigned: true,
    name: 'validated_by'
  })
  validated_by: number | null;

  @Column('enum', {
    nullable: true,
    enum: ['B', 'H', 'A', 'N'],
    name: 'lock_type'
  })
  lock_type: string | null;

  @Column('timestamp', {
    nullable: true,
    name: 'lock_timestamp'
  })
  lock_timestamp: Date | null;

  @Column('int', {
    nullable: true,
    unsigned: true,
    name: 'locked_by'
  })
  locked_by: number | null;

  @Column('timestamp', {
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
    name: 'last_modified'
  })
  last_modified: Date;

  @Field(() => ClubTeam, {nullable: true})
  awayTeam: ClubTeam;

  @Field(() => ClubTeam, {nullable: true})
  homeTeam: ClubTeam;

  @Field()
  scoreModified: boolean;

  @Field(() => PlayerInfo)
  homeCaptain: PlayerInfo;

  @Field(() => PlayerInfo)
  awayCaptain: PlayerInfo;

  @Field(() => PlayerInfo)
  referee: PlayerInfo;

  @Field(() => PlayerInfo)
  roomResponsible: PlayerInfo;
}
