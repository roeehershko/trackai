## Sessions Service (MongoDB + ES, Aggregation Service)
#### DB Structure
- sessions \
id, campaign_id, event_id, source, custom_params, ...

### Methods
- SubscribeSessions({ MaxConcurrency: 50 })

### Jobs
- StoreSessions({ Interval: 30 })

#### Methods
- AggregateSession()

#### Resources
- SourceService: GetSessionCost()

## Campaigns Service (Mysql + Redis Cache)
#### DB Structure
- campaigns \
id, title, slug, created
- sources \
id, payment_type_id, title, slug, created \
- payments_types \
id, title [1, CPC] [2, CPM]
- sources_payments \
id, source_id, cost \
#### Methods
- CreateSource()    
- CreateSourceGoal()
- CreateSourcePayment()
- GetSessionCost({ source })

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

## Network Service
## Payout Service
## Postback Service
## Re-marketing Service
## Notifications Service
## Analytic Service


Session > Goal > Conversion