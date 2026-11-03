import Button from "./components/Button";
import Card from "./components/Card";
import Badge from "./components/Badge";
import { themeClass } from "./theme.css.js";

import {
    page,
    main,
    pageHeader,
    pageTitle,
    pageSubtitle,
    section,
    sectionTitle,
    group,
    buttonGroup,
} from "./styles/page.css.js";

function App() {
    return (
        <div className={`${themeClass} ${page}`}>
            <main className={main}>
                <header className={pageHeader}>
                    <h1 className={pageTitle}>Component Library</h1>

                    <p className={pageSubtitle}>
                        Reusable components styled with Vanilla Extract.
                    </p>
                </header>

                {/* Buttons */}
                <section className={section}>
                    <h2 className={sectionTitle}>Buttons</h2>

                    <Card>
                        <div className={`${group} ${buttonGroup}`}>
                            <Button variant="primary">Primary</Button>
                            <Button variant="secondary">Secondary</Button>
                            <Button variant="danger">Danger</Button>
                            <Button disabled>Disabled</Button>
                        </div>

                        <div className={group}>
                            <Button size="small">Small Button</Button>
                            <Button size="large">Large Button</Button>
                        </div>
                    </Card>
                </section>

                {/* Badges */}
                <section className={section}>
                    <h2 className={sectionTitle}>Badges</h2>

                    <Card>
                        <div className={group}>
                            <Badge variant="success">Success</Badge>
                            <Badge variant="warning">Warning</Badge>
                            <Badge variant="error">Error</Badge>
                        </div>
                    </Card>
                </section>

                {/* Card Component */}
                <section>
                    <h2 className={sectionTitle}>Card Component</h2>

                    <Card title="Reusable Card">
                        <p>
                            This is an example of a reusable card component
                            with custom content.
                        </p>

                        <div className={group}>
                            <Badge variant="success">Active</Badge>

                            <Button variant="primary" size="small">
                                View Details
                            </Button>
                        </div>
                    </Card>
                </section>
            </main>
        </div>
    );
}

export default App;