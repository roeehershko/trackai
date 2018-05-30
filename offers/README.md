## Offer Service (Mysql + Redis)
#### DB Structure
- offers \
id, network_id, title, url, created
- goals \
id, offer_id, name, created \
- payouts \
id, goal_id, revenue
- conversions \
id, session_id, total_revenue, created
conversions_goals
id, conversion_id, goal_id