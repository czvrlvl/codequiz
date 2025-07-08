import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Sidebar() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>My notes</CardTitle>
            </CardHeader>
            <CardContent>
                <h1>List of the notes</h1>
            </CardContent>
        </Card>
    );
}
