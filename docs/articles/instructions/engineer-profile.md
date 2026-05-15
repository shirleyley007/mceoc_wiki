# Engineer Profile

Each engineer has a profile in MCEOC that stores personal and service-related information. Keeping your profile up to date ensures accurate scheduling, on-call routing, and team coordination.


## Profile Fields

### Basic Information

| Field | Description |
|-------|-------------|
| **Name** | Your display name (read-only). |
| **Alias** | Your alias (read-only). |
| **Principle** | Your role principle (read-only). |
| **POD** | The POD you belong to, e.g., `VM`.  |
| **Role** | Your role in the team, e.g., `Engineer`. |
| **Location** | Your work location, e.g., `Shanghai`. |
| **Onboard Date** | The date you joined the team. |
| **Phone** | Your contact phone number. <span style="color: red; font-weight: bold;">⚠ This field must be filled in accurately — it is used for urgent contact.</span> |

### Azure Services

This section lists the Azure services you are responsible for, organized by category tabs.

Use the checkboxes to select or deselect the services you support. You can also use **Select / Unselect All** to toggle all services at once.

### Additional Fields

| Field | Description |
|-------|-------------|
| **Rotation Services** | Services you support for cross-pod rotation. |
| **Topic Owner** | Services or topics you own. |
| **Hobby** | Your hobbies, separated by commas (e.g., `Music, Movies, Dramas`). |
| **Certificates** | Any relevant certifications you hold (enter `NA` if none). |
| **Know Me** | A short self-introduction for your teammates. |

## How to Update Your Profile

1. Open your Profile using either method:
   - **From the Team View page:** Click your name to open the Profile panel on the right side.

    ![Engineer Profile](/engineer-profile.png)

   - **From the Home page:** Navigate to **Home** from the left sidebar, find your profile card, then click the **Edit** button at the bottom.

   ![Navigate to Home](/nav-home.png)

   ![Edit Profile from Home](/home-edit-profile.png)

2. Edit the fields you want to update.
3. Click **Save** to apply your changes, or **Cancel** to discard.

::: tip
Keep your **Azure Services** and **Rotation Services** up to date for the ease of resource locating. 
:::

## Engineer Search

The **Engineer Search** feature is located on the **Home** page (accessible from the left sidebar). It allows you to quickly find team members by searching various keywords.

![Navigate to Home](/nav-home.png)

### How to Use

1. Navigate to the **Home** page from the left sidebar.
2. Expand the **Engineer Search** panel.
3. Type keywords in the search box — the system will automatically suggest matching results for **role**, **name**, **services**, and **pod**.
4. If no results are automatically matched, continue typing and press **Enter** to perform the search.

::: tip
The more you input, the more accurate the matching results.
:::

### Search Keywords

You can search by the following categories:

| Category | Examples |
|----------|----------|
| **Role** | `Engineer`, `MGR`, `TA` |
| **POD** | `Billing`, `DB`, `Mgr&TA`, `Mooncake`, `NET`, `NOAM`, `PaaS`, `SCIM`, `US`, `VM` |
| **Services** | `Advisor`, `Alerts`, `Automation`, `Azure Arc enabled Kubernetes`, `Azure Container Instance`, `Azure Kubernetes Service`, `Virtual Machine`, etc. |
| **Name** | Any engineer's name |

### Search Results

Search results are displayed as profile cards, each showing:

- **Name** and avatar initials
- **POD | Location | Role**
- **Topic Owner** — the services/topics the engineer owns
- **Rotation Services** — services supported for cross-pod rotation
- **Hobby** — personal hobbies

Each card also provides **Edit** and **View Details** buttons at the bottom.

### Topic Owner Star Badge

If you search for a service, engineers who are the **Topic Owner** of that service will be highlighted with a ⭐ **star icon** in the top-right corner of their profile card. This makes it easy to identify the subject matter expert for a given service.

![Engineer Search](/engineer-search.png)
