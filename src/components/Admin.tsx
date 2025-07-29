import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Settings, 
  MessageSquare, 
  DollarSign, 
  GraduationCap, 
  Video, 
  Calendar,
  Upload,
  Eye,
  Trash2,
  Edit,
  Youtube,
  Image as ImageIcon
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Admin = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminPassword, setAdminPassword] = useState("");
  const [messages, setMessages] = useState([]);
  const [donations, setDonations] = useState([]);
  const [educationPayments, setEducationPayments] = useState([]);
  const [events, setEvents] = useState([]);
  const [videos, setVideos] = useState([]);
  const [paymentSettings, setPaymentSettings] = useState({
    banks: [],
    phoneNumbers: [],
    youtubeChannelUrl: ""
  });
  const { toast } = useToast();

  // BACKEND ENDPOINT: POST /api/admin/login
  const handleAdminLogin = async () => {
    try {
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: adminPassword })
      });
      
      if (response.ok) {
        setIsAdmin(true);
        toast({ title: "Admin access granted" });
        loadAdminData();
      } else {
        toast({ title: "Invalid password", variant: "destructive" });
      }
    } catch (error) {
      toast({ title: "Login failed", variant: "destructive" });
    }
  };

  // BACKEND ENDPOINT: GET /api/admin/data
  const loadAdminData = async () => {
    try {
      const [messagesRes, donationsRes, educationRes, eventsRes, videosRes, settingsRes] = await Promise.all([
        fetch('/api/admin/messages'),
        fetch('/api/admin/donations'),
        fetch('/api/admin/education-payments'),
        fetch('/api/admin/events'),
        fetch('/api/admin/videos'),
        fetch('/api/admin/payment-settings')
      ]);

      setMessages(await messagesRes.json());
      setDonations(await donationsRes.json());
      setEducationPayments(await educationRes.json());
      setEvents(await eventsRes.json());
      setVideos(await videosRes.json());
      setPaymentSettings(await settingsRes.json());
    } catch (error) {
      toast({ title: "Failed to load admin data", variant: "destructive" });
    }
  };

  // BACKEND ENDPOINT: POST /api/admin/events
  const handleCreateEvent = async (eventData: any) => {
    try {
      const response = await fetch('/api/admin/events', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(eventData)
      });
      
      if (response.ok) {
        toast({ title: "Event created successfully" });
        loadAdminData();
      }
    } catch (error) {
      toast({ title: "Failed to create event", variant: "destructive" });
    }
  };

  // BACKEND ENDPOINT: POST /api/admin/videos
  const handleUploadVideo = async (videoData: any) => {
    try {
      const response = await fetch('/api/admin/videos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(videoData)
      });
      
      if (response.ok) {
        toast({ title: "Video uploaded successfully" });
        loadAdminData();
      }
    } catch (error) {
      toast({ title: "Failed to upload video", variant: "destructive" });
    }
  };

  // BACKEND ENDPOINT: PUT /api/admin/payment-settings
  const handleUpdatePaymentSettings = async (settings: any) => {
    try {
      const response = await fetch('/api/admin/payment-settings', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(settings)
      });
      
      if (response.ok) {
        toast({ title: "Payment settings updated" });
        setPaymentSettings(settings);
      }
    } catch (error) {
      toast({ title: "Failed to update settings", variant: "destructive" });
    }
  };

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-muted/30 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5" />
              Admin Access
            </CardTitle>
            <CardDescription>Enter admin password to continue</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Input
                type="password"
                placeholder="Admin Password"
                value={adminPassword}
                onChange={(e) => setAdminPassword(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleAdminLogin()}
              />
              <Button onClick={handleAdminLogin} className="w-full">
                Login as Admin
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted/30 p-6">
      <div className="container mx-auto">
        <div className="mb-8">
          <h1 className="font-playfair text-4xl font-bold text-primary mb-2">
            Church Admin Dashboard
          </h1>
          <p className="text-muted-foreground">Manage your church website content and settings</p>
        </div>

        <Tabs defaultValue="messages" className="space-y-6">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="messages">Messages</TabsTrigger>
            <TabsTrigger value="donations">Donations</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="content">Content</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          {/* Messages Tab */}
          <TabsContent value="messages">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" />
                  Contact Messages
                </CardTitle>
                <CardDescription>View and manage contact form submissions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {messages.length === 0 ? (
                    <p className="text-muted-foreground text-center py-8">No messages yet</p>
                  ) : (
                    messages.map((message: any) => (
                      <Card key={message.id} className="p-4">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h4 className="font-semibold">{message.name}</h4>
                            <p className="text-sm text-muted-foreground">{message.email}</p>
                          </div>
                          <Badge variant="outline">{new Date(message.createdAt).toLocaleDateString()}</Badge>
                        </div>
                        <p className="text-sm">{message.message}</p>
                      </Card>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Donations Tab */}
          <TabsContent value="donations">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5" />
                  Donations Received
                </CardTitle>
                <CardDescription>Track and manage donation payments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {donations.length === 0 ? (
                    <p className="text-muted-foreground text-center py-8">No donations yet</p>
                  ) : (
                    donations.map((donation: any) => (
                      <Card key={donation.id} className="p-4">
                        <div className="flex justify-between items-center">
                          <div>
                            <h4 className="font-semibold">${donation.amount}</h4>
                            <p className="text-sm text-muted-foreground">
                              {donation.method} • {donation.donorName || 'Anonymous'}
                            </p>
                          </div>
                          <Badge variant="outline">{new Date(donation.createdAt).toLocaleDateString()}</Badge>
                        </div>
                      </Card>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Education Payments Tab */}
          <TabsContent value="education">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5" />
                  Education Initiative Payments
                </CardTitle>
                <CardDescription>Track education support payments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {educationPayments.length === 0 ? (
                    <p className="text-muted-foreground text-center py-8">No education payments yet</p>
                  ) : (
                    educationPayments.map((payment: any) => (
                      <Card key={payment.id} className="p-4">
                        <div className="flex justify-between items-center">
                          <div>
                            <h4 className="font-semibold">${payment.amount}</h4>
                            <p className="text-sm text-muted-foreground">
                              {payment.method} • {payment.donorName || 'Anonymous'}
                            </p>
                          </div>
                          <Badge variant="outline">{new Date(payment.createdAt).toLocaleDateString()}</Badge>
                        </div>
                      </Card>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Content Management Tab */}
          <TabsContent value="content">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Video className="h-5 w-5" />
                    Video Management
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="video-title">Video Title</Label>
                      <Input id="video-title" placeholder="Enter video title" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="video-url">Video URL/File</Label>
                      <Input id="video-url" placeholder="YouTube URL or upload file" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="video-description">Description</Label>
                      <Textarea id="video-description" placeholder="Video description" />
                    </div>
                    <Button onClick={() => handleUploadVideo({})}>
                      <Upload className="h-4 w-4 mr-2" />
                      Upload Video
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ImageIcon className="h-5 w-5" />
                    Image Management
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="image-title">Image Title</Label>
                      <Input id="image-title" placeholder="Enter image title" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="image-file">Image File</Label>
                      <Input id="image-file" type="file" accept="image/*" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="image-category">Category</Label>
                      <Input id="image-category" placeholder="Gallery, Events, etc." />
                    </div>
                    <Button>
                      <Upload className="h-4 w-4 mr-2" />
                      Upload Image
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Events Management Tab */}
          <TabsContent value="events">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Event Management
                </CardTitle>
                <CardDescription>Create and manage church events</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="event-title">Event Title</Label>
                      <Input id="event-title" placeholder="Enter event title" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="event-date">Event Date</Label>
                      <Input id="event-date" type="date" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="event-description">Description</Label>
                    <Textarea id="event-description" placeholder="Event description" />
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="event-time">Time</Label>
                      <Input id="event-time" placeholder="6:00 PM - 9:00 PM" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="event-location">Location</Label>
                      <Input id="event-location" placeholder="Church premises" />
                    </div>
                  </div>
                  <Button onClick={() => handleCreateEvent({})}>
                    Create Event
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Youtube className="h-5 w-5" />
                    YouTube Channel Settings
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="youtube-url">YouTube Channel URL</Label>
                      <Input 
                        id="youtube-url" 
                        placeholder="https://youtube.com/@yourchurch"
                        value={paymentSettings.youtubeChannelUrl}
                        onChange={(e) => setPaymentSettings({...paymentSettings, youtubeChannelUrl: e.target.value})}
                      />
                    </div>
                    <Button onClick={() => handleUpdatePaymentSettings(paymentSettings)}>
                      Update YouTube Settings
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5" />
                    Payment Settings
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-2">Bank Account Details</h4>
                      <div className="space-y-2">
                        <Input placeholder="Bank Name" />
                        <Input placeholder="Account Number" />
                        <Input placeholder="Account Name" />
                        <Button size="sm">Add Bank Account</Button>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Mobile Payment Numbers</h4>
                      <div className="space-y-2">
                        <Input placeholder="M-Pesa Number" />
                        <Input placeholder="Airtel Money Number" />
                        <Button size="sm">Add Payment Number</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;