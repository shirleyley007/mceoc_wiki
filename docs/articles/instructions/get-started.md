# Get Started

Here are the main concepts you need to know about the system before onboarding.

## User

There are three types of user, corresponding to the three possible onboarding ways: `personal`, `groupChat`, `channel`. Each User must be linked to at least one Team.

### personal

When an engineer is added to the Bot, it is registered with type `personal`.

### groupChat

When a Teams group chat is added to Bot, it is registered with type `groupChat`.

::: tip
The **chat group itself** is registered as a groupChat account, regardless of how many engineers in the chat group.
:::

### channel

When a Teams channel is added to the Bot, it is registered with type `channel`.

::: tip
The **channel itself** is registered as a channel account, regardless of how many engineers in the channel.
:::

## Role

There are two built-in roles in the system, namely `SE` and `TA`. Each User must have a role.

TA role have powerful permissions than SE and receives more notification regarding Team management. Refer to more details under the Features section.

::: warning
Role in Bot is not your Job Title! E.g. Your role in bot can be a SE while your job title is TA.
:::

## Team

A Team is a group of Users, where all Bot features are taking effect over Team level.

Team and User is a multi-to-multi relationship, e.g. a Team can have multiple Users, and a User can join multiple Teams.

## Feature

Each function of the Bot represents a feature. A team can subscribe multiple features.
