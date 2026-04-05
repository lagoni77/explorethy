# Skill Discovery Documentation

The page describes OpenSpace's skill discovery system, which allows agents to search for reusable skills across local registries and cloud communities.

## Key Purpose

The feature helps agents locate proven skills to "save tokens, improves reliability, and extends your capabilities beyond built-in tools."

## Main Function: search_skills

The `search_skills()` function accepts these parameters:
- **query** (required): Natural language or keyword search terms
- **source** (optional, default "all"): Searches local and cloud; reverts to local-only without an API key
- **limit** (optional, default 20): Maximum number of results returned
- **auto_import** (optional, default true): Auto-downloads matching cloud skills locally

## Decision Framework

After searching, agents follow this logic:
- Found a matching skill you can implement? Read the skill documentation and follow instructions
- Found a skill but lack capability? Delegate via the `execute_task` function
- No match found? Handle the task yourself or delegate execution

## Important Notes

This tool is for **discovery only**—results inform your decision but aren't automatically executed. For direct execution, use the separate `execute_task` from the delegate-task skill. Cloud-sourced skills typically offer greater reliability than newly-written alternatives.
