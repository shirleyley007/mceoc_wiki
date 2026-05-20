# Genie

Genie is a Teams bot that integrates with MCEOC data, allowing you to quickly query **special shift members** such as today's on-call engineer or afternoon shift (AS) engineer.

## What You Can Query

- **On-Call** — find out who is on-call for a specific pod today (Primary / Standby)
- **Afternoon Shift (AS)** — find out who is on AS for a specific pod today

### Example Queries

| Query | Result |
|-------|--------|
| `oncall for vm+scim today` | Shows VM and SCIM pod on-call engineers with role (Primary/Standby) and shift type |
| `AS for net today` | Shows NET pod afternoon shift engineer |

![Genie Query Examples](/genie-query.png)

## Download & Usage Guide

For Genie download and usage instructions, please refer to: [http://aka.ms/mcgenie](http://aka.ms/mcgenie)
