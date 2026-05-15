# Team Management

Team Management is a set of features designed for users with **TA** or **Manager** permissions, focusing on team operations and resource control.

## Lock

The Lock feature allows TAs and Managers to restrict leave requests for specific PODs on specific dates.

### How to Use

1. Navigate to the **Team View** page.
2. Hover your mouse over a date cell — a popup will appear with checkboxes for 4 PODs (e.g., `VM+SCIM`, `DB`, `NET`, `PaaS`).
3. Check the POD(s) you want to lock for that date.

![Lock Feature](/team-lock.png)

### Lock Behavior

- Once a POD is locked on a given date, engineers in that POD **cannot modify their work type** for that day in MCEOC.
- On the Team View page, the locked date column will appear in a **darker color** for the corresponding POD, providing a clear visual indicator.

::: warning
Use Lock carefully — it prevents all engineers in the selected POD from making schedule changes on the locked date. Communicate with your team before locking.
:::

## Manage Tab

The **Manage** tab is accessible from the left sidebar and contains administrative tools for team operations.

![Navigate to Manage](/nav-manage.png)

The Manage tab includes 3 sub-tabs:

### EngInfo

The EngInfo interface allows you to manage the engineer database — add, delete, or modify personnel information and permissions.

![EngInfo Interface](/manage-enginfo.png)

#### Table Columns

| Column | Description |
|--------|-------------|
| **POD** | The POD the engineer belongs to. |
| **Alias** | The engineer's alias. |
| **Name** | Full name (with location info if applicable). |
| **Role** | Role type, e.g., `FTE`. |
| **Principle** | Controls permission level. Engineers have `None` as their principle. |
| **Phone** | Contact phone number. |
| **Status** | `Active` or `Inactive` — indicates whether the engineer is currently enabled. |
| **Actions** | Operation buttons (see below). |

#### Actions

| Action | Description |
|--------|-------------|
| **Enable / Disable** | Controls whether this engineer is displayed on the Team View page. Disabled engineers will not appear in the calendar view. |
| **Edit** | Opens the edit form to modify the engineer's information. |
| **Delete** | Permanently removes the engineer from the database. |

::: danger
**Delete** is irreversible — it completely removes the engineer's record from the database. Use with extreme caution.
:::

::: info Access Control
Only personnel who exist in the EngInfo database can access MCEOC. To grant a new team member access, they must first be added here.
:::

#### Adding a New Engineer

Click the **+ Add New** button in the top-right corner to add a new engineer to the database.

### WorkTypeInfo

*(Documentation coming soon)*

### TagInfo

*(Documentation coming soon)*
